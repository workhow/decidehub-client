import React from "react";
import axios from "axios";
import Util from "../../../util";
import Loader from "../../Loader/Loader";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import NotificationLogo from "./bildirim.svg";
import LogoutLogo from "./cikis.svg";
import FormPlusMinus from "./FormPlusMinus/FormPlusMinus";
import Button from "./../../AccountLayout/Register/Button/Button";
import Header from "./Header/Header";
import Options from "../Users/menu.svg";
import UserPlaceholder from "./user.svg";
import SettingsCard from "./SettingsCard/SettingsCard";
import FormBlock from "../../AccountLayout/Register/FormBlock/FormBlock";
import Notifications from "../Notifications/Notifications";
import "./SettingsLayout.css";

export class SettingsLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      isAdmin: localStorage.isAdmin === "1"
    };
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.minusClicked = this.minusClicked.bind(this);
    this.plusClicked = this.plusClicked.bind(this);
    this.settingInputChanged = this.settingInputChanged.bind(this);
    this.profileInputChanged = this.profileInputChanged.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.imageChanged = this.imageChanged.bind(this);
  }

  profileInputChanged(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        [name]: value
      }
    });
  }

  imageChanged(event) {
    const target = event.target;
    const reader = new FileReader();
    const file = target.files && target.files[0];
    if (file && file.type.match("image/*") && file.size <= 1024 * 1024) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setState({
          ...this.state,
          profile: { ...this.state.profile, userImage: reader.result }
        });
      };
    } else {
      this.setState({
        ...this.state,
        profile: { ...this.state.profile, userImage: null }
      });
    }
  }

  minusClicked(event) {
    const target = event.target;
    const key = target.dataset.name;
    const value = parseInt(target.dataset.value);

    if (value <= 1) return;

    this.setState({
      settings: {
        ...this.state.settings,
        [key]: value - 1
      }
    });
  }

  plusClicked(event) {
    const target = event.target;
    const key = target.dataset.name;
    const value = parseInt(target.dataset.value);
    const max = parseInt(target.dataset.max);

    if (value >= max) return;

    this.setState({
      settings: {
        ...this.state.settings,
        [key]: value + 1
      }
    });
  }

  settingInputChanged(event) {
    const target = event.target;
    const key = target.name;
    const max = parseInt(target.max);
    const value = target.value;
    const prefix = target.dataset.prefix;
    const suffix = target.dataset.suffix;

    if (
      (prefix.length === 0 || value.slice(0, prefix.length) === prefix) &&
      (suffix.length === 0 || value.slice(-suffix.length) === suffix)
    ) {
      let parsedValue = Number(
        suffix.length === 0
          ? value.slice(prefix.length)
          : value.slice(prefix.length, -suffix.length)
      );

      if (!isNaN(max) && max < parsedValue) {
        parsedValue = max;
      }

      if (parsedValue >= 0) {
        this.setState({
          settings: {
            ...this.state.settings,
            [key]: parsedValue
          }
        });
      }
    }
  }

  handleNotificationClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleNotificationClose() {
    this.setState({ anchorEl: null });
  }

  componentDidMount() {
    this.getSettings();
    this.getProfile();
  }

  getProfile() {
    const profilePath = Util.pathForCurrentSubdomain(
      "users/" + localStorage.userId
    );

    axios
      .get(profilePath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        this.setState({
          ...this.state,
          profile: response.data
        });
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
        }
      });
  }

  getSettings() {
    const settingsPath = Util.pathForCurrentSubdomain("settings");

    axios
      .get(settingsPath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        const settingList = response.data;
        const settings = {};
        for (let i = 0; i < settingList.length; i++) {
          settings[settingList[i].key] = parseInt(settingList[i].value);
        }

        this.setState({
          ...this.state,
          settings: settings
        });
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
        }
      });
  }

  updateProfile() {
    const updateProfilePath = Util.pathForCurrentSubdomain("users/addEdit");

    axios
      .post(
        updateProfilePath,
        {
          email: this.state.profile.email,
          firstName: this.state.profile.firstName,
          lastName: this.state.profile.lastName,
          tenantId: this.state.profile.tenantId,
          userImage: this.state.profile.userImage,
          initialAuthorityPercent: this.state.profile.initialAuthorityPercent,
          id: this.state.profile.id
        },
        {
          headers: Util.authenticationHeaders()
        }
      )
      .then(response => {
        if (response.data.userImage) {
          localStorage.userImage = response.data.userImage;
        } else {
          localStorage.removeItem("userImage");
        }
        this.setState({
          ...this.state,
          profile: response.data
        });
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
        }
      });

    this.setState({ ...this.state, profile: null });
  }

  updateSettings() {
    const settingsPath = Util.pathForCurrentSubdomain("settings");

    const settingList = Object.entries(this.state.settings).map(
      ([key, value]) => ({
        key: key,
        value: value
      })
    );

    axios
      .post(
        settingsPath,
        { settings: settingList },
        {
          headers: Util.authenticationHeaders()
        }
      )
      .then(response => {
        const settingList = response.data;
        const settings = {};
        for (let i = 0; i < settingList.length; i++) {
          settings[settingList[i].key] = parseInt(settingList[i].value);
        }

        this.setState({
          ...this.state,
          settings: settings
        });
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
        }
      });

    this.setState({
      ...this.state,
      settings: null
    });
  }

  render() {
    if (!this.state.settings || !this.state.profile) {
      return <Loader />;
    }
    return (
      <div>
        <LeftNavbar />
        <div className="ml-24">
          <div className="flex flex-row justify-end pt-12 status-bar text-sm">
            <div className="flex flex-row items-center mr-10">
              <div variant="contained" onClick={this.handleNotificationClick}>
                <img src={NotificationLogo} alt="notification logo" />
              </div>
              <a href="/home" onClick={Util.signOut}>
                <img src={LogoutLogo} alt="logout logo" className="ml-10" />
              </a>
            </div>
          </div>
          {this.state.isAdmin && (
            <div>
              <div className="w-2/3 m-auto mt-12">
                <Header text="Oylama Ayarları" />
              </div>
              <div className="mt-6">
                <SettingsCard>
                  <div className="flex flex-col w-1/3 p-5 text-gray-text">
                    <p className="h-16">
                      Oyların geçerli sayılabilmesi için gerekli minimum katılım
                      oranı
                    </p>
                    <FormPlusMinus
                      placeholderText="%50"
                      prefix="%"
                      max="100"
                      plusClicked={this.plusClicked}
                      minusClicked={this.minusClicked}
                      inputChanged={this.settingInputChanged}
                      name="AuthorityVotingRequiredUserPercentage"
                      value={
                        this.state.settings
                          .AuthorityVotingRequiredUserPercentage
                      }
                    />
                  </div>
                  <div className="flex flex-col w-1/3 p-5 text-gray-text">
                    <p className="h-16">
                      Yetki dağılımı oylaması için tekrarlama sıklığı
                    </p>
                    <FormPlusMinus
                      plusClicked={this.plusClicked}
                      minusClicked={this.minusClicked}
                      inputChanged={this.settingInputChanged}
                      placeholderText="30 Gün"
                      suffix=" Gün"
                      name="VotingFrequency"
                      value={this.state.settings.VotingFrequency}
                    />
                  </div>
                  <div className="flex flex-col w-1/3 p-5 text-gray-text">
                    <p className="h-16">Oylama Süresi</p>
                    <FormPlusMinus
                      plusClicked={this.plusClicked}
                      minusClicked={this.minusClicked}
                      inputChanged={this.settingInputChanged}
                      placeholderText="1 Saat"
                      suffix=" Saat"
                      name="VotingDuration"
                      value={this.state.settings.VotingDuration}
                    />
                  </div>
                </SettingsCard>
              </div>

              <div className="w-1/6 ml-auto save-button mt-4">
                <Button onClick={this.updateSettings} text="Kaydet" />
              </div>
            </div>
          )}
          <div className="w-2/3 m-auto mt-4">
            <Header text="Kişisel Ayarlar" />
          </div>
          <div className="flex flex-row justify-between content-center items-center w-2/3 m-auto mt-6 text-sm">
            <div className="flex flex-col justify-end bg-white border border-gray-light h-64 mr-8">
              {this.state.profile.userImage ? (
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    background: `url(${this.state.profile.userImage}) center center / cover`
                  }}></div>
              ) : (
                <img
                  src={UserPlaceholder}
                  alt="user"
                  style={{
                    width: "250px",
                    height: "250px",
                    padding: "20px"
                  }}
                />
              )}
              <input
                type="file"
                className="mx-auto p-2 bg-white"
                style={{ width: "250px" }}
                onChange={this.imageChanged}></input>
            </div>
            <div className="border border-gray-light bg-white flex-grow p-10 h-64">
              <div className="flex flex-row">
                <div className="w-1/2 mr-5 mb-5">
                  <FormBlock
                    labelText="Adı"
                    name="firstName"
                    handleInputChange={this.profileInputChanged}
                    value={this.state.profile.firstName}
                  />
                </div>
                <div className="w-1/2 mb-5">
                  <FormBlock
                    labelText="Soyadı"
                    name="lastName"
                    handleInputChange={this.profileInputChanged}
                    value={this.state.profile.lastName}
                  />
                </div>
              </div>
              <FormBlock
                placeholderText="example@decidehub.com"
                labelText="E-mail"
                name="email"
                handleInputChange={this.profileInputChanged}
                value={this.state.profile.email}
              />
            </div>
          </div>
          <div className="w-1/6 ml-auto save-button mt-4">
            <Button onClick={this.updateProfile} text="Kaydet" />
          </div>
          {this.state.isAdmin && false && (
            <div>
              <div className="w-2/3 m-auto mt-12">
                <Header text="Ödeme Yöntemlerim" />
              </div>
              <div className="flex flex-row justify-between content-center bg-white items-center px-5 py-2 border border-gray-light w-2/3 m-auto mt-6 text-sm">
                <p className="p-5 text-gray-dark">Mastercard - 7059</p>
                <img src={Options} alt="options logo" />
              </div>
              <div className="w-2/3 m-auto mt-12">
                <Header text="Aboneliklerim" />
              </div>
              <div className="flex flex-row justify-between content-center bg-white items-center px-5 py-2 border border-gray-light w-2/3 m-auto mt-6 text-sm">
                <div className="flex flex-row mr-12">
                  <p className="p-5 text-gray-dark mr-8">
                    Decidehub Team Üyeliği (14 Üye)
                  </p>
                  <p className="p-5 text-gray-text">$14,99 /Ay</p>
                </div>
                <div className="flex flex-row ">
                  <p className="p-5 text-gray-text mr-8">
                    18 Ara 2018 tarihinde yenilenir
                  </p>
                  <img src={Options} alt="options logo" />
                </div>
              </div>
            </div>
          )}
        </div>
        <Notifications
          open={Boolean(this.state.anchorEl)}
          anchorEl={this.state.anchorEl}
          onClose={this.handleNotificationClose}
        />
      </div>
    );
  }
}

export default SettingsLayout;

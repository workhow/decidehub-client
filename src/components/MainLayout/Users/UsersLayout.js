import React from "react";
import axios from "axios";
import Util from "../../../util";
import Drawer from "@material-ui/core/Drawer";
import DrawerButton from "@material-ui/core/Button";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import Card from "./Card/Card";
import ProfilePic from "../../AccountLayout/Register/RegisterStepOne/manager.svg";
import FormBlock from "../../AccountLayout/Register/FormBlock/FormBlock";
import FormBlockTwo from "../../AccountLayout/Register/FormBlockTwo/FormBlockTwo";
import Button from "../../AccountLayout/Register/Button/Button";
import CloseLogo from "./kapat.svg";
import "../Users/UsersLayout.css";
import Loader from "../../Loader/Loader";

class UsersLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      users: [],
      isAdmin: localStorage.isAdmin === "1"
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addOrUpdateUser = this.addOrUpdateUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    this.updateUserList();
  }

  updateUserList() {
    const listUserPath = Util.pathForCurrentSubdomain("users");

    axios
      .get(listUserPath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        this.setState({
          users: response.data
        });
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  addUser() {
    this.editUser(null);
  }

  editUser(id) {
    const selectedUser = this.state.users.filter(d => d.id === id)[0];

    if (selectedUser) {
      this.setState({
        ...this.state,
        addEditUserId: id,
        addEditUserFirstName: selectedUser.firstName,
        addEditUserLastName: selectedUser.lastName,
        addEditUserEmail: selectedUser.email,
        addEditUserInitialAuthorityPercent:
          selectedUser.initialAuthorityPercent,
        right: true
      });
    } else {
      this.setState({
        ...this.state,
        addEditUserId: null,
        addEditUserFirstName: "",
        addEditUserLastName: "",
        addEditUserEmail: "",
        addEditUserInitialAuthorityPercent: 0,
        right: true
      });
    }
  }

  addOrUpdateUser() {
    if (
      this.state.addEditUserEmail &&
      this.state.addEditUserFirstName &&
      this.state.addEditUserLastName
    ) {
      const addEditUserPath = Util.pathForCurrentSubdomain("users/addEdit");

      axios
        .post(
          addEditUserPath,
          {
            email: this.state.addEditUserEmail,
            firstName: this.state.addEditUserFirstName,
            lastName: this.state.addEditUserLastName,
            initialAuthorityPercent: parseInt(
              this.state.addEditUserInitialAuthorityPercent
            ),
            tenantId: Util.getSubdomain(),
            id: this.state.addEditUserId
          },
          { headers: Util.authenticationHeaders() }
        )
        .then(response => {
          this.updateUserList();
          this.setState({
            ...this.state,
            right: false
          });
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            Util.signOut();
          } else {
            alert(error.response.data[0].description);
          }
        });
    }
  }

  toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      ...this.state,
      [side]: open
    });
  };

  sideList = side => (
    <div
      style={{ width: 350 }}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}></div>
  );

  render() {
    if (this.state.users.length === 0) {
      return <Loader />;
    }
    return (
      <div>
        <LeftNavbar />
        <div className="ml-24">
          <div className="flex flex-row ml-16 md:ml-32 xl:ml-48 mt-16 lg:mt-32 m-8">
            <div className="flex items-center">
              <div className="text-2xl text-gray-dark inline ml-5">Üyeler</div>
              {this.state.isAdmin && (
                <div className="ml-4 border rounded border-green-500">
                  <DrawerButton
                    onClick={this.addUser}
                    className="text-base text-gray-text inline">
                    Yeni Ekle
                  </DrawerButton>
                </div>
              )}
            </div>
          </div>
          <div className="user-container mx-16 md:mx-32 xl:mx-48 mt-8">
            {this.state.users.map(user => (
              <Card
                editable={this.state.isAdmin}
                key={user.id}
                name={`${user.firstName} ${user.lastName}`}
                email={user.email}
                imgLink={user.userImage || ProfilePic}
                active={user.isActive}
                initialAuthorityPercent={user.initialAuthorityPercent}
                editUser={this.editUser}
                id={user.id}
              />
            ))}
          </div>
        </div>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}>
          {this.sideList("right")}
          <div className="m-4 md:m-12 lg:m-16 mb-6 bg-white">
            <img
              src={CloseLogo}
              alt="cross logo for closing the modal"
              className="flex flex row ml-auto cursor-pointer"
              onClick={this.toggleDrawer("right", false)}
            />
            <div className="flex flex-col text-center px-3 mt-20">
              <p className="text-2xl mb-24 mt-5 text-gray-dark">
                {this.state.addEditUserId
                  ? "Kullanıcı Bilgilerini Düzenle"
                  : "Yeni Kullanıcı Davet Et"}
              </p>
              <div className="flex">
                <div className="w-1/2 pr-3 my-5">
                  <FormBlockTwo
                    handleInputChange={this.handleInputChange}
                    name="addEditUserFirstName"
                    value={this.state.addEditUserFirstName}
                    labelText="Adı"
                    placeholderText="Ad"
                  />
                </div>
                <div className="w-1/2 pl-3 my-5">
                  <FormBlockTwo
                    handleInputChange={this.handleInputChange}
                    value={this.state.addEditUserLastName}
                    name="addEditUserLastName"
                    labelText="Soyadı"
                    placeholderText="Soyad"
                  />
                </div>
              </div>
              <div className="mb-5">
                <FormBlock
                  labelText="Başlangıç Yetki Puanı"
                  name="addEditUserInitialAuthorityPercent"
                  type="number"
                  value={this.state.addEditUserInitialAuthorityPercent}
                  handleInputChange={this.handleInputChange}
                  placeholderText="0"
                />
              </div>
              <div className="mb-5">
                <FormBlock
                  labelText="E-mail"
                  name="addEditUserEmail"
                  value={this.state.addEditUserEmail}
                  handleInputChange={this.handleInputChange}
                  placeholderText="example@decidehub.com"
                />
              </div>
              <div className="mt-12">
                <Button
                  text={
                    this.state.addEditUserId
                      ? "Değişiklikleri Kaydet"
                      : "Davet Et"
                  }
                  onClick={this.addOrUpdateUser}
                />
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default UsersLayout;

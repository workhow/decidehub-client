import React from "react";
import axios from "axios";
import Util from "../../util";
import { Redirect } from "react-router-dom";
import LeftNavbar from "./LeftNavbar/LeftNavbar";
import StatusIndicator from "../SetupLayout/StatusIndicator/StatusIndicator";
import NotificationLogo from "./Settings/bildirim.svg";
import LogoutLogo from "./Settings/cikis.svg";
import Header from "./Settings/Header/Header";
import SubHeader from "./Settings/SubHeader/SubHeader";
import PollCard from "./Polls/PollCard/PollCard";
import PolicyLogo from "./yonetmelik.svg";
import InfoLogo from "./info.svg";
import PuzzleLogo from "./paylasim.svg";
import ManagerLogo from "./yonetici.svg";
import AuthorithyLogoOne from "./yetki.svg";
import AuthorithyLogoTwo from "./yetki2.svg";
import DrawerModal from "./DrawerModal/DrawerModal";
import { Link } from "react-router-dom";
import FinalCongratsModal from "./Polls/FinalCongratsModal/FinalCongratsModal";
import Notifications from "./Notifications/Notifications";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      modalType: "",
      modalTitle: "",
      modalText: "",
      modalOpen: false,
      notificationOpen: false,
      anchorEl: null
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
  }

  componentDidMount() {
    const nextAuthorityPollDatePath = Util.pathForCurrentSubdomain(
      "poll/AuthorityPoll/nextDate"
    );

    axios
      .get(nextAuthorityPollDatePath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        this.setState({
          nextAuthorityPollDate: response.data
        });
      })
      .catch(error => {
        if (error.response.status === 401) {
          Util.signOut();
          this.setState({
            ...this.state,
            refresh: true
          });
        }
      });
  }

  toggleDrawer(modalType, side, open) {
    return event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      this.setState({
        ...this.state,
        [side]: open,
        modalType: modalType
      });
    };
  }

  openModal(modalTitle, modalText) {
    return event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      this.setState({
        ...this.state,
        modalTitle: modalTitle,
        modalText: modalText,
        modalOpen: true,
        right: false,
        nextAuthorityPollDate: ""
      });
    };
  }

  closeModal() {
    return event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      this.setState({
        ...this.state,
        modalOpen: false
      });
    };
  }

  handleNotificationClick(event) {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
      notificationOpen: true
    });
  }

  handleNotificationClose() {
    this.setState({
      ...this.setState,
      anchorEl: null,
      notificationOpen: false
    });
  }

  render() {
    if (this.state.refresh) {
      return <Redirect to="/" />;
    }
    return (
      <div className="pb-64">
        <LeftNavbar />
        <div className="ml-24">
          <div className="flex flex-row justify-end pt-12 status-bar text-sm">
            <div>
              <StatusIndicator
                text={
                  this.state.nextAuthorityPollDate
                    ? `Bir Sonraki Yetki Dağılımı Oylaması: ${this.state.nextAuthorityPollDate}`
                    : "Yetki Dağılım Oylaması Bekleniyor"
                }
                color="decidehub"
              />
            </div>
            <div className="flex flex-row items-center mr-10">
              <div variant="contained" onClick={this.handleNotificationClick}>
                <img src={NotificationLogo} alt="notification logo" />
              </div>
              <a href="/home" onClick={Util.signOut}>
                <img src={LogoutLogo} alt="logout logo" className="ml-10" />
              </a>
            </div>
          </div>
          <div className="m-auto w-2/3 mt-16 text-sm">
            <Header text="Oylama Başlat" />
            <div
              className="flex flex-row w-full bg-white border border-gray-light py-1 h-32 mt-8"
              onClick={this.toggleDrawer("authpollmodal", "right", true)}>
              <div className="flex items-center w-1/12">
                <img
                  src={AuthorithyLogoTwo}
                  alt="puzzle logo"
                  className="w-16 mx-5"
                />
              </div>
              <div className="flex flex-col w-11/12 items-left justify-center">
                <div className="ml-5">
                  <Header text="Yetki Dağılımı Oylaması" />
                </div>
                <div className="ml-5">
                  <SubHeader text="Oylamalardaki birim güç oranlarını belirlemek için belirli periyotlarla yenilenen oylamadır." />
                </div>
              </div>
              <div>
                <img
                  src={InfoLogo}
                  alt="question mark"
                  className="ml-auto mr-5 mt-5"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row m-auto w-2/3 mt-8 text-sm">
            <Link
              to="/policy"
              className="flex flex-col bg-white border border-gray-light w-1/2 h-64 mr-8">
              <img
                src={InfoLogo}
                alt="question mark"
                className="ml-auto mr-5 mt-5"
              />
              <div className="w-3/5">
                <img src={PolicyLogo} alt="Policy Logo" className="w-16 mx-5" />
                <div className="mx-5 mt-12">
                  <Header text="Yönetmelik" />
                </div>
                <div className="mx-5">
                  <SubHeader text="Yönetmeliği düzenleyin" />
                </div>
              </div>
            </Link>
            <div className="flex flex-col justify-between w-1/2 h-64">
              <div
                className="flex flex-row bg-white border border-gray-light py-1"
                onClick={this.toggleDrawer("sharepollmodal", "right", true)}>
                <div className="pl-8 pb-5 w-1/5 ">
                  <img
                    src={PuzzleLogo}
                    alt="puzzle logo"
                    className="ml-auto mr-5 mt-5"
                  />
                </div>
                <div className="flex flex-col w-4/5 items-left justify-center">
                  <div className="ml-5">
                    <Header text="Paylaşım Oylaması" />
                  </div>
                  <div className="ml-5">
                    <SubHeader text="Gelir,mal,hak paylaşımı için oylama başlatın" />
                  </div>
                </div>
                <div>
                  <img
                    src={InfoLogo}
                    alt="question mark"
                    className="ml-auto mr-5 mt-5"
                  />
                </div>
              </div>
              <div
                className="flex flex-row bg-white border border-gray-light py-1"
                onClick={this.toggleDrawer("managerpollmodal", "right", true)}>
                <div className="pl-8 pb-5 w-1/5">
                  <img
                    src={ManagerLogo}
                    alt="manager logo"
                    className="ml-auto mr-5 mt-5"
                  />
                </div>
                <div className="flex flex-col w-4/5 items-left justify-center">
                  <div className="mx-5">
                    <Header text="Yönetici Seç" />
                  </div>
                  <div className="mx-5">
                    <SubHeader text="Belirli bir görev için lider seçin" />
                  </div>
                </div>
                <div>
                  <img
                    src={InfoLogo}
                    alt="question mark"
                    className="ml-auto mr-5 mt-5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 m-auto mt-12 mb-6">
            <Header text="Oylamalar" />
          </div>
          <PollCard
            logo={AuthorithyLogoOne}
            pollName="2. Yetki Dağılımı Oylaması"
            pollEndDate="23 Tem 2018"
            statusText="Başlıyor.. "
            statusColor="blue"
          />
          <PollCard
            logo={PuzzleLogo}
            pollName="2. Yetki Dağılımı Oylaması"
            pollEndDate="23 Tem 2018"
            statusText="Tamamlandı "
            statusColor="red"
          />
        </div>

        <DrawerModal
          type={this.state.modalType}
          right={this.state.right}
          toggleDrawer={this.toggleDrawer}
          openModal={this.openModal}
        />

        <FinalCongratsModal
          open={this.state.modalOpen}
          title={this.state.modalTitle}
          text={this.state.modalText}
          closeModal={this.closeModal}
        />

        <Notifications
          id={this.id}
          open={this.state.notificationOpen}
          anchorEl={this.state.anchorEl}
          onClose={this.handleNotificationClose}
        />
      </div>
    );
  }
}

export default MainLayout;

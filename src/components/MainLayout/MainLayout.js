import axios from "axios";
import moment from "moment";
import "moment/locale/tr";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import Util from "../../util";
import Loader from "../Loader/Loader";
import StatusIndicator from "../SetupLayout/StatusIndicator/StatusIndicator";
import DrawerModal from "./DrawerModal/DrawerModal";
import LeftNavbar from "./LeftNavbar/LeftNavbar";
import Notifications from "./Notifications/Notifications";
import PuzzleLogo from "./paylasim.svg";
import FinalCongratsModal from "./Polls/FinalCongratsModal/FinalCongratsModal";
import PollCard from "./Polls/PollCard/PollCard";
import NotificationLogo from "./Settings/bildirim.svg";
import LogoutLogo from "./Settings/cikis.svg";
import Header from "./Settings/Header/Header";
import SubHeader from "./Settings/SubHeader/SubHeader";
import AuthorityLogo from "./yetki.svg";
import ManagerLogo from "./yonetici.svg";
import PolicyLogo from "./yonetmelik.svg";

const logoForPollType = (type) => {
  switch (type) {
    case "authorityPoll":
      return AuthorityLogo;
    case "multipleChoicePoll":
      return ManagerLogo;
    case "policyChangePoll":
      return PolicyLogo;
    case "sharePoll":
      return PuzzleLogo;
    default:
      return;
  }
};

const drawerForPollType = (type) => {
  switch (type) {
    case "authorityPoll":
      return "authvotemodal";
    case "multipleChoicePoll":
      return "managervotemodal";
    case "policyChangePoll":
      return "policyvotemodal";
    case "sharePoll":
      return "sharevotemodal";
    default:
      return;
  }
};

const statusTextForListType = (listType) => {
  switch (listType) {
    case "completed":
      return "Tamamlandı";
    case "userNotVoted":
      return "Oyunuzu bekliyor";
    case "userVoted":
      return "Devam ediyor";
    case "waiting":
      return "Başlıyor...";
    default:
      return "";
  }
};

const statusColorForListType = (listType) => {
  switch (listType) {
    case "completed":
      return "red";
    case "userNotVoted":
      return "green";
    case "userVoted":
      return "orange";
    case "waiting":
      return "blue";
    default:
      return "";
  }
};

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
      anchorEl: null,
      votingPoll: null,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.vote = this.vote.bind(this);

    moment.locale("tr");
  }

  componentDidMount() {
    this.refreshData();
    this.refreshTimer = setInterval(this.refreshData, 60000);
  }

  refreshData(withLoader) {
    this.getNextAuthorityPollDate();
    this.updatePollList(withLoader);
  }

  componentWillUnmount() {
    clearInterval(this.refreshTimer);
  }

  vote(pollId) {
    return (event) => {
      event.persist();

      const poll = this.state.polls.filter((poll) => poll.pollId === pollId)[0];
      this.setState({ ...this.state, votingPoll: poll }, () => {
        if (poll.listType === "userVoted") return;

        if (poll.listType === "completed") {
          return this.toggleDrawer("pollresultmodal", "right", true)(event);
        }
        if (poll) {
          return this.toggleDrawer(
            drawerForPollType(poll.type),
            "right",
            true
          )(event);
        }
      });
    };
  }

  getNextAuthorityPollDate() {
    const nextAuthorityPollDatePath = Util.pathForCurrentSubdomain(
      "poll/AuthorityPoll/nextDate"
    );

    axios
      .get(nextAuthorityPollDatePath, {
        headers: Util.authenticationHeaders(),
      })
      .then((response) => {
        this.setState({
          nextAuthorityPollDate: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
          this.setState({
            ...this.state,
            refresh: true,
          });
        }
      });
  }

  updatePollList(withLoader) {
    if (withLoader) {
      this.setState({
        ...this.state,
        polls: null,
      });
    }

    const listPollsPath = Util.pathForCurrentSubdomain("poll/list");

    axios
      .get(listPollsPath, {
        headers: Util.authenticationHeaders(),
      })
      .then((response) => {
        this.setState({
          ...this.state,
          polls: response.data,
        });
      });
  }

  toggleDrawer(modalType, side, open) {
    return (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      this.setState({
        ...this.state,
        [side]: open,
        modalType: modalType,
      });
    };
  }

  openModal(modalTitle, modalText) {
    return (event) => {
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
        nextAuthorityPollDate: "",
      });
    };
  }

  closeModal() {
    return (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      this.setState({
        ...this.state,
        modalOpen: false,
      });
    };
  }

  handleNotificationClick(event) {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
      notificationOpen: true,
    });
  }

  handleNotificationClose() {
    this.setState({
      ...this.setState,
      anchorEl: null,
      notificationOpen: false,
    });
  }

  render() {
    if (this.state.refresh) {
      return <Redirect to="/" />;
    } else if (!this.state.polls) {
      return <Loader />;
    }
    return (
      <div className="pb-64">
        <LeftNavbar />
        <div className="ml-16 px-8 md:px-20">
          <div className="flex flex-row w-full justify-between pt-12 status-bar text-sm">
            <div>
              <StatusIndicator
                text={
                  this.state.nextAuthorityPollDate
                    ? `Bir Sonraki Yetki Dağılımı Oylaması: ${moment
                        .utc(this.state.nextAuthorityPollDate)
                        .local()
                        .format("DD MMMM YYYY HH:mm")}`
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
          <div className="m-auto w-full mt-16 text-sm">
            <Header text="Oylama Başlat" />
            {this.state.polls.filter((poll) => poll.type === "authorityPoll")
              .length === 0 && (
              <div
                className="flex flex-row w-full bg-white border border-gray-light p-4 mt-8 cursor-pointer"
                onClick={this.toggleDrawer("authpollmodal", "right", true)}
              >
                <div className="hidden lg:block">
                  <div className="flex items-center w-24 py-2 mx-4">
                    <img
                      src={AuthorityLogo}
                      alt="puzzle logo"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1 md:my-auto lg:ml-auto md:mx-auto mx-5 mt-2">
                  <Header text="Yetki Dağılımı Oylaması" />
                  <SubHeader
                    className="mt-1"
                    text="Aşağıdaki oylamalarda, grubunuzdaki her bireyin ne kadar söz hakkı olacağını belirleyin."
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row m-auto mt-0 md:mt-4 text-sm">
            <Link
              to="/policy"
              className="flex flex-col bg-white border border-gray-light w-full md:w-1/2 p-4"
            >
              <div className="flex flex-row md:flex-col p-1 h-full justify-center">
                <div className="w-24 py-2 mx-4 hidden lg:block">
                  <img
                    src={PolicyLogo}
                    alt="Policy Logo"
                    className="w-full block"
                  />
                </div>
                <div className="flex flex-1 md:flex-grow-0 flex-col pr-1 md:items-start justify-center">
                  <div className="mx-5 mt-2">
                    <Header text="Yönetmelik" />
                    <SubHeader className="mt-1" text="Yönetmeliği düzenleyin" />
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex flex-col justify-between w-full md:w-1/2">
              <div
                className="flex flex-row flex-1 bg-white border border-gray-light p-4 cursor-pointer"
                onClick={this.toggleDrawer(
                  "firstmanagerpollmodal",
                  "right",
                  true
                )}
              >
                <div className="w-24 py-2 mx-4 hidden lg:block">
                  <img
                    src={ManagerLogo}
                    alt="manager logo"
                    className="w-full block"
                  />
                </div>
                <div className="flex flex-1 flex-col pr-1 items-left justify-center">
                  <div className="ml-5">
                    <Header text="Çoktan Seçmeli Oylama" />
                    <SubHeader
                      className="mt-1"
                      text="Seçenekler arasında tercih yapın."
                    />
                  </div>
                </div>
              </div>

              <div
                className="flex flex-row flex-1 bg-white border border-gray-light p-4 cursor-pointer"
                onClick={this.toggleDrawer(
                  "firstsharepollmodal",
                  "right",
                  true
                )}
              >
                <div className="w-24 py-2 mx-4 hidden lg:block">
                  <img
                    src={PuzzleLogo}
                    alt="puzzle logo"
                    className="w-full block"
                  />
                </div>
                <div className="flex flex-1 flex-col pr-1 items-left justify-center">
                  <div className="ml-5">
                    <Header text="Paylaşım Oylaması" />
                    <SubHeader
                      className="mt-1"
                      text="Gelir, mal, hak paylaşımı için oylama başlatın"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.polls.length !== 0 && (
            <div className="m-auto mt-10 mb-6">
              <Header text="Oylamalar" />
            </div>
          )}

          {this.state.polls.map((poll) => (
            <PollCard
              logo={logoForPollType(poll.type)}
              key={poll.pollId}
              id={poll.pollId}
              pollName={poll.name}
              pollEndDate={poll.deadline}
              statusText={statusTextForListType(poll.listType)}
              statusColor={statusColorForListType(poll.listType)}
              vote={this.vote}
            />
          ))}
        </div>

        <DrawerModal
          type={this.state.modalType}
          right={this.state.right}
          toggleDrawer={this.toggleDrawer}
          openModal={this.openModal}
          poll={this.state.votingPoll}
          refreshData={this.refreshData}
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

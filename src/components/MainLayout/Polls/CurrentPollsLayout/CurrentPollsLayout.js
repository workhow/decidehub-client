import React from "react";
import axios from "axios";
import Util from "../../../../util";
import LeftNavbar from "../../LeftNavbar/LeftNavbar";
import NotificationLogo from "../../Settings/bildirim.svg";
import LogoutLogo from "../../Settings/cikis.svg";
import Header from "../../Settings/Header/Header";
import PollCard from "../../Polls/PollCard/PollCard";
import PuzzleLogo from "../../paylasim.svg";
import AuthorityLogo from "../../yetki.svg";
import PolicyLogo from "../../yonetmelik.svg";
import ManagerLogo from "../../yonetici.svg";
import Notifications from "../../Notifications/Notifications";
import Loader from "../../../Loader/Loader";
import DrawerModal from "../../DrawerModal/DrawerModal";
import FinalCongratsModal from "../FinalCongratsModal/FinalCongratsModal";
import NoPollLayout from "./NoPollLayout";

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

class CurrentPollsLayout extends React.Component {
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
      ...this.state,
      anchorEl: null,
      notificationOpen: false,
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

  componentDidMount() {
    this.refreshData();
    this.refreshTimer = setInterval(this.refreshData, 60000);
  }

  refreshData(withLoader) {
    this.updatePollList(withLoader);
  }

  componentWillUnmount() {
    clearInterval(this.refreshTimer);
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

  vote(pollId) {
    return (event) => {
      event.persist();

      const poll = this.state.polls.filter((poll) => poll.pollId === pollId)[0];
      this.setState(
        {
          ...this.state,
          votingPoll: poll,
        },
        () => {
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
        }
      );
    };
  }

  render() {
    if (!this.state.polls) {
      return <Loader />;
    } else if (this.state.polls.length === 0) {
      return (
        <div>
          <LeftNavbar />
          <div className="ml-16">
            <NoPollLayout />
          </div>
        </div>
      );
    }
    return (
      <div className="pb-64">
        <LeftNavbar />
        <div className="ml-16">
          ml-16
          <div className="flex flex-row justify-end pt-12 status-bar text-sm">
            <div className="flex flex-row items-center mr-10">
              <div variant="contained" onClick={this.handleNotificationClick}>
                <img src={NotificationLogo} alt="notification logo" />
              </div>
              <a href="!#">
                <img src={LogoutLogo} alt="logout logo" className="ml-10" />
              </a>
            </div>
          </div>
          <div className="w-2/3 m-auto mt-32 mb-6">
            <Header text="Oylamalar" />
          </div>
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
          open={this.state.notificationOpen}
          anchorEl={this.state.anchorEl}
          onClose={this.handleNotificationClose}
        />
      </div>
    );
  }
}

export default CurrentPollsLayout;

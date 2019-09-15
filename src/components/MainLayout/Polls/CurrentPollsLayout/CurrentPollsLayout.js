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

const logoForPollType = type => {
  switch (type) {
    case "AuthorityPoll":
      return AuthorityLogo;
    case "MultipleChoicePoll":
      return ManagerLogo;
    case "PolicyChangePoll":
      return PolicyLogo;
    case "SharePoll":
      return PuzzleLogo;
    default:
      return;
  }
};

const statusTextForListType = listType => {
  switch (listType) {
    case "completed":
      return "Tamamlandı";
    case "userNotVoted":
    case "userVoted":
      return "Devam ediyor";
    case "waiting":
      return "Başlıyor...";
    default:
      return "";
  }
};

const statusColorForListType = listType => {
  switch (listType) {
    case "completed":
      return "red";
    case "userNotVoted":
      return "orange";
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
      anchorEl: null,
      polls: []
    };
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
  }

  handleNotificationClick(event) {
    this.setState({ ...this.state, anchorEl: event.currentTarget });
  }

  handleNotificationClose() {
    this.setState({ ...this.state, anchorEl: null });
  }

  componentDidMount() {
    this.updatePollList();
  }

  updatePollList() {
    const listPollsPath = Util.pathForCurrentSubdomain("poll/list");

    axios
      .get(listPollsPath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        this.setState({
          ...this.state,
          polls: response.data
        });
      });
  }

  render() {
    return (
      <div className="pb-64">
        <LeftNavbar />
        <div className="ml-24">
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
          {this.state.polls.map(poll => (
            <PollCard
              logo={logoForPollType(poll.Type)}
              key={poll.pollId}
              pollName={poll.name}
              statusText={statusTextForListType(poll.listType)}
              statusColor={statusColorForListType(poll.listType)}
            />
          ))}
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

export default CurrentPollsLayout;

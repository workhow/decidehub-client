import axios from "axios";
import moment from "moment";
import "moment/locale/tr";
import React, { Component } from "react";
import Util from "../../../../util";
import Button from "../../../AccountLayout/Register/Button/Button";
import Loader from "../../../Loader/Loader";
import SubHeader from "../../Settings/SubHeader/SubHeader";
import VoteRange from "./VoteRange/VoteRange";

class AuthVoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
    this.voteChanged = this.voteChanged.bind(this);
    this.submitVote = this.submitVote.bind(this);
    moment.locale("tr");
  }

  componentDidMount() {
    this.updateUserList();
  }

  submitVote(event) {
    if (this.state.sum !== 1000) {
      return alert(
        "Tüm yetkinizi dağıtmamışsınız. Lütfen oylarınızın tamamı 1000 olacak şekilde yeniden dağıtınız."
      );
    }

    const votePath = Util.pathForCurrentSubdomain("poll/AuthorityPoll/vote");

    axios
      .post(
        votePath,
        {
          pollId: this.props.poll.pollId,
          votes: Object.entries(this.state.votes).map(([key, value]) => ({
            userId: key,
            value: value
          }))
        },
        { headers: Util.authenticationHeaders() }
      )
      .then(response => {
        this.props.openModal("Tebrikler! Harika!", "Oyunu kullandın.")(event);
        this.props.refreshData(true);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
        } else {
          alert(error.response.data[0].description);
        }
      });
  }

  voteChanged(event) {
    const target = event.target;
    let value = parseInt(target.value);
    const userId = target.dataset.userid;

    if (this.state.sum + value - this.state.votes[userId] > 1000) {
      value = 1000 - this.state.sum + this.state.votes[userId];
    }

    const newVotes = { ...this.state.votes, [userId]: value };
    
    const sum = Object.values(newVotes).reduce(
      (a, b) => parseInt(a) + parseInt(b),
      0
    );

    this.setState({
      ...this.state,
      sum: sum,
      votes: newVotes
    });
  }

  updateUserList() {
    const listUserPath = Util.pathForCurrentSubdomain("users?noImage=true");

    axios
      .get(listUserPath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        const userList = response.data.filter(
          user => user.id !== localStorage.userId && user.isActive
        );

        const votes = {};

        for (let i = 0; i < userList.length; i++) {
          const user = userList[i];
          votes[user.id] = 0;
        }

        this.setState({
          users: userList,
          votes: votes
        });
      });
  }

  render() {
    if (!this.state.users) {
      return <Loader />;
    }
    return (
      <div className="flex flex-col mt-8">
        <div className="flex flex-row justify-between mb-8">
          <p className="w-1/2 text-2xl text-gray-dark align-left">
            {this.props.poll.name}
          </p>
        </div>
        <div className="flex flex-row mb-24">
          <SubHeader text="Sonlanma Tarihi" />
          <p className="ml-16 text-base text-gray-dark">
            {Util.capitalize(
              moment
                .utc(this.props.poll.deadline)
                .local()
                .calendar()
            )}
          </p>
        </div>
        {this.state.users.map(user => (
          <VoteRange
            name={`${user.firstName} ${user.lastName}`}
            userId={user.id}
            key={user.id}
            max="1000"
            value={this.state.votes[user.id]}
            onChange={this.voteChanged}
          />
        ))}

        <div className="flex flex-col w-full mt-24">
          <Button text="Gönder" onClick={this.submitVote} />
        </div>
      </div>
    );
  }
}

export default AuthVoteModal;

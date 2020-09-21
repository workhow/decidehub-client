import axios from "axios";
import moment from "moment";
import "moment/locale/tr";
import React, { Component } from "react";
import Util from "../../../../util";
import Button from "../../../AccountLayout/Register/Button/Button";
import Loader from "../../../Loader/Loader";
import SubHeader from "../../Settings/SubHeader/SubHeader";
import VoteRange from "../AuthVoteModal/VoteRange/VoteRange";

class ShareVoteModal extends Component {
  constructor(props) {
    super(props);
    const options = JSON.parse(this.props.poll.multipleChoiceResult);
    this.state = { sum: 0, votes: Object.fromEntries(options.map(option => [option, 0])) };
    this.voteChanged = this.voteChanged.bind(this);
    this.submitVote = this.submitVote.bind(this);
    moment.locale("tr");
  }

  submitVote(event) {
    if (this.state.sum !== 100) {
      return alert(
        "Tüm oyları dağıtmamışsınız. Lütfen oylarınızın tamamı 100 olacak şekilde yeniden dağıtınız."
      );
    }

    const votePath = Util.pathForCurrentSubdomain("poll/sharePoll/vote");

    axios
      .post(
        votePath,
        {
          pollId: this.props.poll.pollId,
          options: Object.entries(this.state.votes).map(([key, value]) => ({
            option: key,
            sharePercent: value
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
    const option = target.dataset.option;

    if (this.state.sum + value - this.state.votes[option] > 100) {
      value = 100 - this.state.sum + this.state.votes[option];
    }

    const newVotes = { ...this.state.votes, [option]: value };

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

  render() {
    if (!this.props.poll.multipleChoiceResult) {
      return <Loader />;
    }
    return (
      <div className="flex flex-col mt-8">
        <div className="flex flex-row justify-between mb-8">
          <p className="text-2xl text-gray-dark w-1/2 align-left">
            {this.props.poll.name}
          </p>
        </div>
        <div className="flex flex-row mb-8 justify-between">
          <SubHeader text="Sonlanma Tarihi" />
          <p className="text-gray-dark text-base w-2/3 text-left">
            {Util.capitalize(
              moment
                .utc(this.props.poll.deadline)
                .local()
                .calendar()
            )}
          </p>
        </div>
        <div className="flex flex-row mb-24 justify-between">
          <SubHeader text="Açıklama" />
          <p className="text-gray-dark text-base w-2/3 text-left">
            {this.props.poll.description}
          </p>
        </div>

        {this.props.poll.multipleChoiceResult &&
          JSON.parse(this.props.poll.multipleChoiceResult).map(
            (option) => (
              <VoteRange
                name={option}
                option={option}
                key={option}
                max="100"
                value={this.state.votes[option]}
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

export default ShareVoteModal;

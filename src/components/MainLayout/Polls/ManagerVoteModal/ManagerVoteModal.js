import React, { Component } from "react";
import axios from "axios";
import Util from "../../../../util";
import Button from "../../../AccountLayout/Register/Button/Button";
import SubHeader from "../../Settings/SubHeader/SubHeader";
import Checkbox from "./Checkbox/Checkbox";
import "./ManagerVoteModal.css";

class ManagerVoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: -1 };

    this.selectOption = this.selectOption.bind(this);
    this.submitVote = this.submitVote.bind(this);
  }

  selectOption(optionIndex) {
    if (optionIndex === this.state.selectedIndex) {
      optionIndex = -1;
    }
    this.setState({ ...this.state, selectedIndex: optionIndex });
  }

  submitVote(event) {
    const votePath = Util.pathForCurrentSubdomain("poll/multipleChoice/vote");

    axios
      .post(
        votePath,
        {
          pollId: this.props.poll.pollId,
          value: this.optionIndex
        },
        { headers: Util.authenticationHeaders() }
      )
      .then(response => {
        this.props.openModal("Tebrikler! Harika!", "Oyunu kullandın.")(event);
        this.props.refreshData();
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
        } else {
          alert(error.response.data[0].description);
        }
      });
  }

  render() {
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
            {new Date(this.props.poll.deadline).toLocaleString()}
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
            (option, index) => (
              <div
                onClick={() => this.selectOption(index)}
                key={index}
                className={`hover:bg-green-100 ${
                  index === this.state.selectedIndex ? "bg-option-selected" : ""
                }`}>
                <Checkbox
                  text={option}
                  readOnly={true}
                  checked={index === this.state.selectedIndex}
                />
              </div>
            )
          )}
        <div className="flex flex-col w-full mt-24">
          <Button text="Gönder" onClick={this.submitVote} />
        </div>
      </div>
    );
  }
}

export default ManagerVoteModal;

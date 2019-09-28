import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Util from "../../../../util";
import Button from "../../../AccountLayout/Register/Button/Button";
import SubHeader from "../../Settings/SubHeader/SubHeader";
import Checkbox from "../../Polls/ManagerVoteModal/Checkbox/Checkbox";

class PolicyVoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = { accepted: false, selected: false };

    this.selectOption = this.selectOption.bind(this);
    this.submitVote = this.submitVote.bind(this);
  }

  selectOption(accepted) {
    if (this.state.selected && accepted === this.state.accepted) {
      this.setState({ selected: false });
    } else {
      this.setState({ accepted: accepted, selected: true });
    }
  }

  submitVote(event) {
    if (!this.state.selected) {
      return alert("Lütfen bu oylama için Kabul ya da Red seçeneğini seçiniz.");
    }

    const votePath = Util.pathForCurrentSubdomain("poll/policyChange/vote");

    axios
      .post(
        votePath,
        {
          pollId: this.props.poll.pollId,
          pollValue: this.state.accepted ? 1 : -1
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

  render() {
    return (
      <div className="flex flex-col mt-8">
        <div className="flex flex-row justify-between mb-12">
          <p className="text-2xl text-gray-dark w-1/2 align-left">
            Yönetmelik Değişikliği
          </p>
        </div>
        <div className="flex flex-row mb-8 justify-between">
          <div className="w-1/3 pr-4">
            <SubHeader text="Sonlanma Tarihi" />
          </div>
          <p className="text-gray-dark text-base w-2/3 text-left">
            {new Date(this.props.poll.deadline).toLocaleString()}
          </p>
        </div>
        <div className="flex flex-row mb-8 justify-between">
          <div className="w-1/3 pr-4">
            <SubHeader text="Değiştirme Sebebi" />
          </div>
          <p className="text-gray-dark text-base w-2/3 text-left">
            {this.props.poll.description}
          </p>
        </div>
        <div className="flex flex-row mb-8 justify-between">
          <div className="w-1/3 pr-4">
            <SubHeader text="Değişen Yönetmelik" />
          </div>
          <Link
            className="text-gray-dark text-base w-2/3 text-left underline hover:text-blue-500"
            to={`/policy/diff/${this.props.poll.policyId}`}>
            Değişiklikleri Görüntüle
          </Link>
        </div>
        <div
          onClick={() => this.selectOption(true)}
          className={`hover:bg-green-100 ${
            this.state.selected && this.state.accepted
              ? "bg-option-selected"
              : ""
          }`}>
          <Checkbox
            text="Kabul"
            readOnly={true}
            checked={this.state.selected && this.state.accepted}
          />
        </div>
        <div
          onClick={() => this.selectOption(false)}
          className={`hover:bg-red-100 ${
            this.state.selected && !this.state.accepted
              ? "bg-option-negative-selected"
              : ""
          }`}>
          <Checkbox
            text="Red"
            readOnly={true}
            checked={this.state.selected && !this.state.accepted}
          />
        </div>
        <div className="flex flex-col w-full mt-12">
          <Button text="Gönder" onClick={this.submitVote} />
        </div>
      </div>
    );
  }
}

export default PolicyVoteModal;

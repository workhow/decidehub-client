import React, { Component } from "react";
import axios from "axios";
import Util from "../../../../util";
import VotingPeople from "./Group 10.svg";
import Button from "../../../AccountLayout/Register/Button/Button";

class AuthPollModal extends Component {
  constructor(props) {
    super(props);
    this.startPoll = this.startPoll.bind(this);
  }

  startPoll(event) {
    event.persist();

    const startAuthPollPath = Util.pathForCurrentSubdomain(
      "poll/AuthorityPoll/startPoll"
    );

    axios
      .get(startAuthPollPath, { headers: Util.authenticationHeaders() })
      .then(response => {
        this.props.toggleDrawer("congratsauthmodal", "right", true)(event);
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
      <div className="flex flex-col pr-3">
        <p className="text-2xl text-gray-dark w-full align-left pl-2">
          Yetki Dağılımı Oylaması Başlat
        </p>
        <div className="flex flex-col justify-center mt-12 px-4 items-center">
          <img
            className="w-full"
            style={{ maxWidth: 500 }}
            src={VotingPeople}
            alt="illustration of voting people"
          />
          <p className="text-base mt-12 text-gray-dark">
            90 gün arayla tekrarlanacak olan bu oylama aslında gruptaki her bir
            üyenin oy gücünü belirlemek için yapılıyor.
          </p>
        </div>
        <div className="flex flex-col self-center w-full mt-24">
          <Button text="Devam Et" onClick={this.startPoll} />
        </div>
      </div>
    );
  }
}

export default AuthPollModal;

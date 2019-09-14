import React, { Component } from "react";
import VotingPeople from "./Group 10.svg";
import Button from "../../../AccountLayout/Register/Button/Button";

class AuthPollModal extends Component {
  render() {
    return (
      <div className="flex flex-col pr-3 mt-8">
        <p className="text-2xl text-gray-dark w-1/2 align-left pl-2">
          Yetki Dağılımı Oylaması Başlat
        </p>
        <div className="flex flex-col justify-center mt-12 px-4">
          <img
            className="w-full"
            src={VotingPeople}
            alt="illustration of voting people"
          />
          <p className="text-base mt-12 text-gray-dark">
            90 gün arayla tekrarlanacak olan bu oylama aslında gruptaki her bir
            üyenin oy gücünü belirlemek için yapılıyor.
          </p>
        </div>
        <div className="flex flex-col self-center w-1/2 mt-24">
          <Button
            text="Devam Et"
            onClick={this.props.toggleDrawer(
              "congratsauthmodal",
              "right",
              true
            )}
          />
        </div>
      </div>
    );
  }
}

export default AuthPollModal;

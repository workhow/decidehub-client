import React, { Component } from "react";
import VotingPeople from "./Asset 9.svg";
import Button from "../../../AccountLayout/Register/Button/Button";

class FirstPolicyModal extends Component {

  render() {
    return (
      <div className="flex flex-col pr-3">
        <p className="text-2xl text-gray-dark w-full align-left pl-2">
          Yönetmelik Değişikliği Öner
        </p>
        <div className="flex flex-col justify-center mt-12 px-4 items-center px-12">
          <img
            className="w-full"
            style={{ maxWidth: 350 }}
            src={VotingPeople}
            alt="illustration of voting people"
          />
          <p className="text-base mt-12 text-gray-dark text-center">
            Yönetmelik grubunuzun Dna’sı gibidir. şimdi buraya yeni birşeyler ekleme zamanı!
          </p>
        </div>
        <div className="flex flex-col self-center w-2/5 mt-16">
          <Button text="Oylamayı Başlat" onClick={this.props.toggleDrawer("changepolicymodal", "right", true)}/>
        </div>
      </div>
    );
  }
}

export default FirstPolicyModal;

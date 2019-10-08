import React, { Component } from "react";
import VotingPeople from "./Asset 7.svg";
import Button from "../../../AccountLayout/Register/Button/Button";

class FirstManagerPollModal extends Component {

  render() {
    return (
      <div className="flex flex-col pr-3">
        <p className="text-2xl text-gray-dark w-full align-left pl-2">
            Yönetici Seçimi Başlat
        </p>
        <div className="flex flex-col justify-center mt-12 px-4 items-center px-12">
          <img
            className="w-full"
            style={{ maxWidth: 500 }}
            src={VotingPeople}
            alt="illustration of voting people"
          />
          <p className="text-base mt-12 text-gray-dark text-center">
            90 gün arayla tekrarlanacak olan bu oylama aslında gruptaki her bir
            üyenin oy gücünü belirlemek için yapılıyor.
          </p>
        </div>
        <div className="flex flex-col self-center w-2/3 mt-16">
          <Button text="Oylamayı Başlat" onClick={this.props.toggleDrawer("managerpollmodal", "right", true)}/>
        </div>
      </div>
    );
  }
}

export default FirstManagerPollModal;

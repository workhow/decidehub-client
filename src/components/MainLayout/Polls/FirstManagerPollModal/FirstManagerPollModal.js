import React, { Component } from "react";
import Button from "../../../AccountLayout/Register/Button/Button";
import VotingPeople from "./Asset 7.svg";

class FirstManagerPollModal extends Component {
  render() {
    return (
      <div className="flex flex-col pr-3">
        <p className="text-2xl text-gray-dark w-full align-left pl-2">
          Çoktan Seçmeli Oylama Başlat
        </p>
        <div className="flex flex-col justify-center mt-12 px-4 items-center px-12">
          <img
            className="w-full"
            style={{ maxWidth: 500 }}
            src={VotingPeople}
            alt="illustration of voting people"
          />
          <p className="text-base mt-12 text-gray-dark text-center">
            Bu oylama ile yapabilecekleriniz
          </p>
          <p className="text-xs mt-4 text-gray-dark text-left">
            <ul className="list-disc">
              <li>
                Üye giriş - çıkış oylamaları
              </li>
              <li>
                Yönetici seçimi oylamaları
              </li>
              <li>
                Para transferi kabul - red oylamaları
              </li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col self-center w-2/3 mt-16">
          <Button
            text="Oylamayı Başlat"
            onClick={this.props.toggleDrawer("managerpollmodal", "right", true)}
          />
        </div>
      </div>
    );
  }
}

export default FirstManagerPollModal;

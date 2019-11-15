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
            Bir görev tanımına kimi getireceğinize bu çoktan seçmeli oylama ile
            karar verebilirsiniz.
          </p>
          <p className="text-xs mt-4 text-gray-dark text-left">
            <ul className="list-disc">
              <li>
                Göreve ait yetki ve sorumlulukların önceden yönetmelikle net
                şekilde tanımlanmış olmasını tavsiye ederiz.
              </li>
              <li>
                Bu oylamayı çoktan seçmeli her türlü oylamada karar almak için
                de kullanabilirsiniz.
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

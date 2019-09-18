import React, { Component } from "react";
import Button from "../../../AccountLayout/Register/Button/Button";
import SubHeader from "../../Settings/SubHeader/SubHeader";
import Checkbox from "./Checkbox/Checkbox";
import "./ManagerVoteModal.css";

const options = ["Dogukan Nomak", "Cagakan Bagci", "Erdem Tonyali"];

class ManagerVoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: -1 };

    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(optionIndex) {
    if (optionIndex === this.state.selectedIndex) {
      optionIndex = -1;
    }
    this.setState({ ...this.state, selectedIndex: optionIndex });
  }

  render() {
    return (
      <div className="flex flex-col mt-8">
        <div className="flex flex-row justify-between mb-8">
          <p className="text-2xl text-gray-dark w-1/2 align-left">
            Brand Manager Seçimi
          </p>
        </div>
        <div className="flex flex-row mb-8 justify-between">
          <SubHeader text="Sonlanma Tarihi" />
          <p className="text-gray-dark text-base w-2/3 text-left">
            23 Tem 2018
          </p>
        </div>
        <div className="flex flex-row mb-24 justify-between">
          <SubHeader text="Açıklama" />
          <p className="text-gray-dark text-base w-2/3 text-left">
            Şirketin bordro, izin, işe alım süreçlerinin yönetiminden
            sorumludur.kararlarını genel müdür ve departman yardımcıları ile
            ortak alır.
          </p>
        </div>
        {options.map((option, index) => (
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
        ))}
        <div className="flex flex-col w-1/2 mt-24">
          <Button
            text="Devam Et"
            onClick={this.props.openModal(
              "Tebrikler! Harika!",
              "Oyunu kullandın."
            )}
          />
        </div>
      </div>
    );
  }
}

export default ManagerVoteModal;

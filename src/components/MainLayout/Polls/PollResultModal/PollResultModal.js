import React, { Component } from "react";
import Button from "../../../AccountLayout/Register/Button/Button";

class PollResultModal extends Component {
  render() {
    return (
      <div className="flex flex-col pr-3">
        <p className="text-2xl text-gray-dark w-full align-left pl-2">
          {this.props.poll.name}
        </p>
        <div className="flex flex-col justify-center mt-12 px-4 items-start">
          <p className="text-base mt-12 text-gray-dark">
            <strong>Oylama Sonucu:</strong> {this.props.poll.result}
          </p>
        </div>
        <div className="flex flex-col self-center w-full mt-24">
          <Button
            text="Devam Et"
            onClick={this.props.toggleDrawer("", "right", false)}
          />
        </div>
      </div>
    );
  }
}

export default PollResultModal;

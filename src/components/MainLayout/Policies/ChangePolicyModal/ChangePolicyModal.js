import React, { Component } from "react";
import axios from "axios";
import Util from "../../../../util";
import TextArea from "./TextArea/TextArea";
import Button from "../../../AccountLayout/Register/Button/Button";

class ChangePolicyModal extends Component {
  constructor(props) {
    super(props);
    this.state = { pollDescription: "" };
    this.startPoll = this.startPoll.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  startPoll(event) {
    event.persist();

    const changePolicyPath = Util.pathForCurrentSubdomain("policy/save");

    axios
      .post(
        changePolicyPath,
        {
          title: "Yönetmelik",
          body: this.props.draftBody,
          pollDescription: this.state.pollDescription
        },
        { headers: Util.authenticationHeaders() }
      )
      .then(response => {
        this.props.toggleDrawer("congratspolicymodal", "right", true)(event);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
        } else {
          alert(error.response.data[0].description);
        }
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="flex flex-col px-3 mt-8">
        <p className="text-2xl mb-16 mt-4 text-gray-dark">
          Yönetmelik Değişikliği Öner
        </p>
        <div>
          <TextArea
            name="pollDescription"
            className="text-base text-gray-dark"
            labelText="Bu değişikliği neden gerekli gördüğünü üyelere açıklar mısın?"
            handleInputChange={this.handleInputChange}
          />
        </div>
        <div className="w-1/3 mt-12">
          <Button text="Oylamayı Başlat" onClick={this.startPoll} />
        </div>
      </div>
    );
  }
}

export default ChangePolicyModal;

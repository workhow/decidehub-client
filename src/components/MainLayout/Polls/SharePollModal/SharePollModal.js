import React, { Component } from "react";
import axios from "axios";
import Util from "../../../../util";
import FormBlock from "../../../AccountLayout/Register/FormBlock/FormBlock";
import TextArea from "../../../AccountLayout/Register/TextArea/TextArea";
import Button from "../../../AccountLayout/Register/Button/Button";

class SharePollModal extends Component {
  constructor(props) {
    super(props);
    this.startPoll = this.startPoll.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  startPoll(event) {
    event.persist();

    const startSharePollPath = Util.pathForCurrentSubdomain(
      "poll/sharePoll/startPoll"
    );

    axios
      .post(
        startSharePollPath,
        {
          name: this.state.title,
          description: this.state.description
        },
        { headers: Util.authenticationHeaders() }
      )
      .then(response => {
        this.props.toggleDrawer("congratssharemodal", "right", true)(event);
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
          Paylaşımlı oylama başlat
        </p>
        <div className="mb-8">
          <FormBlock
            className="text-base text-gray-dark"
            labelText="Başlık"
            name="title"
            handleInputChange={this.handleInputChange}
            placeholderText=""
          />
        </div>
        <div>
          <TextArea
            className="text-base text-gray-dark"
            labelText="Açıklama"
            name="description"
            handleInputChange={this.handleInputChange}
            placeholderText=""
          />
        </div>
        <div className="w-full mt-32">
          <Button text="Oylamayı Başlat" onClick={this.startPoll} />
        </div>
      </div>
    );
  }
}

export default SharePollModal;

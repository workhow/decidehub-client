import axios from "axios";
import React, { Component } from "react";
import Util from "../../../../util";
import Button from "../../../AccountLayout/Register/Button/Button";
import FormBlock from "../../../AccountLayout/Register/FormBlock/FormBlock";
import TextArea from "../../../AccountLayout/Register/TextArea/TextArea";

class SharePollModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      options: ["", ""],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.startPoll = this.startPoll.bind(this);
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
          description: this.state.description,
          options: this.state.options,
        },
        { headers: Util.authenticationHeaders() }
      )
      .then((response) => {
        this.props.toggleDrawer("congratssharemodal", "right", true)(event);
        this.props.refreshData(true);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
        } else {
          alert(error.response.data[0].description);
        }
      });
  }

  addOption() {
    this.setState({
      ...this.state,
      options: [...this.state.options, ""],
    });
  }

  removeOption(event) {
    const target = event.target;
    const optionIndex = parseInt(target.dataset.index);

    this.setState({
      ...this.state,
      options: this.state.options.filter((val, index) => index !== optionIndex),
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleOptionChange(event) {
    const target = event.target;
    const optionVal = target.value;
    const optionIndex = parseInt(target.dataset.index);
    this.setState({
      ...this.state,
      options: this.state.options.map((val, index) =>
        index === optionIndex ? optionVal : val
      ),
    });
  }

  render() {
    return (
      <div className="flex flex-col px-3 mt-8">
        <p className="mt-4 text-2xl text-gray-dark">Oylama Ayarları</p>
        <div className="mt-8">
          <FormBlock
            name="name"
            value={this.state.name}
            handleInputChange={this.handleInputChange}
            className="text-base text-gray-dark"
            labelText="Başlık"
            placeholderText=""
          />
        </div>
        <div className="mt-8 mb-4">
          <TextArea
            name="description"
            value={this.state.name}
            handleInputChange={this.handleInputChange}
            className="text-base text-gray-dark"
            labelText="Açıklama"
            placeholderText=""
          />
        </div>
        {this.state.options.map((val, index) => (
          <div className="flex mt-4" key={index}>
            <FormBlock
              className="flex-grow text-base text-gray-dark"
              labelText={`${index + 1}. Seçenek`}
              index={index}
              value={this.state.options[index]}
              handleInputChange={this.handleOptionChange}
              placeholderText=""
            />

            {index > 1 && (
              <button
                className="self-end px-4 py-3 text-xs font-bold text-white uppercase bg-red-500 "
                onClick={this.removeOption}
                data-index={index}
              >
                Sil
              </button>
            )}
          </div>
        ))}
        <button
          className="w-full px-4 py-3 mt-4 mb-12 text-xs font-bold text-white uppercase bg-green-500"
          onClick={this.addOption}
        >
          Seçenek Ekle
        </button>

        <div className="w-full mt-4">
          <Button text="Oylamayı Başlat" onClick={this.startPoll} />
        </div>
      </div>
    );
  }
}

export default SharePollModal;

import React, { Component } from "react";
import FormBlock from "../../../AccountLayout/Register/FormBlock/FormBlock";
import TextArea from "../../../AccountLayout/Register/TextArea/TextArea";
import Button from "../../../AccountLayout/Register/Button/Button";

class ManagerPollModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      options: ["", ""]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
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
      )
    });
  }

  addOption() {
    this.setState({
      ...this.state,
      options: [...this.state.options, ""]
    });
  }

  removeOption(event) {
    const target = event.target;
    const optionIndex = parseInt(target.dataset.index);

    this.setState({
      ...this.state,
      options: this.state.options.filter((val, index) => index !== optionIndex)
    });
  }

  render() {
    return (
      <div className="flex flex-col px-3 mt-8">
        <p className="text-2xl mt-4 text-gray-dark">Yönetici seçimi başlat</p>
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
          <div className="mt-4 flex" key={index}>
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
                className="bg-red-500 text-white font-bold uppercase py-3 px-4 text-xs  self-end "
                onClick={this.removeOption}
                data-index={index}>
                Sil
              </button>
            )}
          </div>
        ))}
        <button
          className="bg-green-500 text-white font-bold uppercase py-3 px-4 mt-4 mb-12 text-xs w-full"
          onClick={this.addOption}>
          Seçenek Ekle
        </button>

        <div className="w-full mt-4">
          <Button
            text="Oylama Başlat"
            onClick={this.props.toggleDrawer(
              "congratsmanagermodal",
              "right",
              true
            )}
          />
        </div>
      </div>
    );
  }
}

export default ManagerPollModal;

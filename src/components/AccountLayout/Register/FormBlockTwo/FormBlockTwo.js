import React from "react";

class FormBlockTwo extends React.Component {
  render() {
    return (
      <div>
        <label className="block tracking-wide text-xs mb-2 text-gray-dark">
          {this.props.labelText}
        </label>
        <div className="block text-gray-700 w-full flex">
          <input
            name={this.props.name}
            className="appearance-none block w-full border border-gray-border py-3 px-4 leading-tight text-xs text-gray-dark"
            type={this.props.type || "text"}
            minLength={this.props.minLength || 0}
            onChange={this.props.handleInputChange}
            placeholder={this.props.placeholderText}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}

export default FormBlockTwo;

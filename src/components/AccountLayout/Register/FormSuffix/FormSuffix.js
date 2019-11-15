import React from "react";

class FormSuffix extends React.Component {
  render() {
    return (
      <div>
        <label className="block tracking-wide text-xs mb-2 text-gray-dark">
          {this.props.labelText}
        </label>
        <div className="block text-gray-700 w-full flex">
          <input
            className="appearance-none block w-full text-gray-900 border border-gray-border py-3 px-4 leading-tight z-2 text-right"
            type="text"
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
            onChange={this.props.handleInputChange}
            readOnly={this.props.readOnly}
            name={this.props.name}
            placeholder={this.props.placeholderText}
            value={this.props.value}
          />
          <span className="text-sm text-gray-text bg-gray-bg py-3 px-4 border border-gray-border border-l-0 text-center">
            {this.props.suffixText}
          </span>
        </div>
      </div>
    );
  }
}

export default FormSuffix;

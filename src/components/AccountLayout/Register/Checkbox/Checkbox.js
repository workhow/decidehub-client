import React from "react";

class Checkbox extends React.Component {
  render() {
    return (
      <div className="w-full px-3 flex items-baseline">
        <input
          name={this.props.name}
          type="checkbox"
          className="mr-2"
          onChange={this.props.handleInputChange}
        />
        <label className="text-xs text-gray-text">{this.props.text}</label>
      </div>
    );
  }
}

export default Checkbox;

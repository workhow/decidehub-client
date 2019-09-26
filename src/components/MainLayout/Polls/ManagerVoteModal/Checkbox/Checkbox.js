import React from "react";

class Checkbox extends React.Component {
  render() {
    return (
      <div className="flex flex-row w-full items-center justify-between px-4 py-4">
        <label className="text-lg text-gray-dark">{this.props.text}</label>
        {this.props.checked && (
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={this.props.checked}
              readOnly={Boolean(this.props.readOnly)}
            />
            <span className="checkmark"></span>
          </label>
        )}
      </div>
    );
  }
}

export default Checkbox;

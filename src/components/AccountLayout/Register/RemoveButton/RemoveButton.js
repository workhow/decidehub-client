import React from "react";

class RemoveButton extends React.Component {
  render() {
    return (
      <button
        className="bg-red-500 text-white font-bold uppercase py-3 px-4 mb-12 text-xs w-full"
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default RemoveButton;

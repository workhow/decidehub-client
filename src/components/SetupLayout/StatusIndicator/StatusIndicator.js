import React from "react";
import "./StatusIndicator.css";

class StatusIndicator extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.color
            ? `${this.props.color} ` +
              (this.props.className || "") +
              " rounded mr-12 text-white text-center"
            : this.props.className
        }
      >
        <div className="text-center p-2 sm:p-4 md:px-8">{this.props.text}</div>
      </div>
    );
  }
}

export default StatusIndicator;

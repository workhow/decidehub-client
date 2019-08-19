import React from "react";
import "./StatusIndicator.css";

class StatusIndicator extends React.Component {
    render() {
        return <div
            className={this.props.color
            ? `${this.props.color} ` + this.props.className
            : this.props.className}>
            <div className="w-32 h-12"></div>
        </div>
    }
}

export default StatusIndicator;
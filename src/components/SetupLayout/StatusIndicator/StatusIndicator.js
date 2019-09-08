import React from "react";
import "./StatusIndicator.css";

class StatusIndicator extends React.Component {
    emptyClass = () => {
        if(this.props.className) {
            this.props.className.empty();
        }
    }

    render() {
        this.emptyClass();
        return <div
            className={this.props.color 
            ? `${this.props.color} ` + this.props.className + " rounded mr-12 text-white text-center"
            : this.props.className} >
            <div className="flex flex-row text-center py-3 px-8">{this.props.text}</div>
        </div>
    }
}

export default StatusIndicator;
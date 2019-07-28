import React from "react";
import "./SetupTopBanner.css";
import logo from "./logo.svg";

class SetupTopBanner extends React.Component {
    render () {
        return <div className="top-banner w-full h-full bg-white z-50">
            <img src={logo} alt="decidehub colored logo" className="p-12"/>
            <div className="w-3/5 m-auto">
                <p className="text-gray-dark text-2xl">{this.props.text}</p>
                <p className="text-gray-text text-sm mt-4 mb-12">{this.props.subText}</p>
            </div>
        </div>
    }
}

export default SetupTopBanner;
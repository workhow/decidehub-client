import React from "react";
import "./Logo.css";
import logo from"./logo-white.svg"

class Logo extends React.Component {
    render() {
        return <img src= {logo} alt="white logo" className= "logoWhite m-10" />
    }
}

export default Logo;
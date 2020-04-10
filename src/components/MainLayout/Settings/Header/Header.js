import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <p className="text-2xl text-gray-dark leading-7">{this.props.text}</p>
      </div>
    );
  }
}

export default Header;

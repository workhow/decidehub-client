import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuLogo from "../menu.svg";

class Card extends Component {
  render() {
    return (
      <div className="bg-white py-5 border border-gray-light m-5">
        <Link to="!#">
          <img src={MenuLogo} alt="menu logo" className="ml-auto mr-5" />
        </Link>
        <div className="flex flex-col items-center">
          <img
            src={this.props.imgLink}
            alt="profile pic"
            className="rounded-full h-auto p-2 md:p-4"
          />
          <div>
            <div className="p-2 md:p-4 flex flex-col text-center">
              <h3 className="text-xl text-gray-dark">{this.props.name}</h3>
              <p className=" text-sm lg:text-base text-gray-text">
                Başlangıç Yetki Puanı: {this.props.initialAuthorityScore}
              </p>
              <p className=" text-sm lg:text-base text-gray-text py-5">
                {this.props.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

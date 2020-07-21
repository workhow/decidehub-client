import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="bg-white py-5 border border-gray-light m-5">
        <div className="flex flex-col items-center">
          <img
            src={this.props.imgLink}
            alt={this.props.name}
            className="rounded-full w-40 h-40"
          />
          <div>
            <div className="p-2 md:p-4 flex flex-col text-center">
              <h3 className="text-xl text-gray-dark">
                {this.props.name}
              </h3>
              <p className="text-sm lg:text-base text-gray-text">
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

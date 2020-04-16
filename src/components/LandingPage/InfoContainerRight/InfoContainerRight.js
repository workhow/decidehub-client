import React from "react";

class InfoContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="mx-auto flex flex-col lg:flex-row container px-16">
          <div className="hidden lg:block w-1/2 m-auto">
            <img src={this.props.logo} alt="logo" className="w-full-lp-img" />
          </div>
          <div className="lg:pl-16 flex flex-col justify-center w-full text-justify">
            <p className="text-2xl md:text-3xl pb-2">{this.props.title}</p>
            <p className="text-sm md:text-base mb-6">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoContainer;

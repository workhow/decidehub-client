import React from "react";

class InfoContainerLeft extends React.Component {
  render() {
    return (
      <div className="bg-white">
        <div className="mx-auto flex flex-col lg:flex-row container px-16">
          <div className="lg:pr-16 flex flex-col justify-center text-justify">
            <p className="text-2xl md:text-3xl pb-4">{this.props.title}</p>
            <p className="text-sm md:text-base mb-6">{this.props.text}</p>
          </div>
          <div className="hidden lg:block w-11/12 m-auto">
            <img src={this.props.logo} alt="logo" className="w-full" />
          </div>
        </div>
      </div>
    );
  }
}

export default InfoContainerLeft;

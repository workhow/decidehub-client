import React from "react";

class Button extends React.Component {
    render () {
        return   <button className="bg-gray-dark text-white font-bold uppercase py-3 px-4 mb-12 text-xs w-full">
              {this.props.text}
          </button>
    }
}

export default Button;


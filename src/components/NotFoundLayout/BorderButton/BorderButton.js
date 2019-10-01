import React from "react";

class BorderButton extends React.Component {
    render () {
        return   <button className="bg-white text-gray-dark font-bold uppercase py-3 px-4 mb-12 text-xs w-full border border-gray-dark rounded-sm" onClick={this.props.onClick}>
              {this.props.text}
          </button>
    }
}

export default BorderButton;
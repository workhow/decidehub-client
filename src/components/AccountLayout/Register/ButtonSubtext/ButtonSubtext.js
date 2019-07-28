import React from "react";

class ButtonSubtext extends React.Component {
    render () {
        return  <div>
        <span className="text-gray-text text-xs text-gray-500 mr-5">{this.props.textOne}</span>
        <span><a href="/signin" className="text-sm text-gray-dark">{this.props.textTwo}</a></span>
      </div>
    }
}

export default ButtonSubtext;
import React from "react";

class ButtonSubtext extends React.Component {
  render() {
    return (
      <div>
        <span className="text-gray-text text-xs text-gray-500 mr-5">
          {this.props.text}
        </span>
        <span>
          <a href={this.props.linkUrl} className="text-sm text-gray-dark">
            {this.props.linkText}
          </a>
        </span>
      </div>
    );
  }
}

export default ButtonSubtext;

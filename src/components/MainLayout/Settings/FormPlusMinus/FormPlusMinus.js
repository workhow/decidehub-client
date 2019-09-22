import React from "react";
import MinusIcon from "./minuspath.svg";
import PlusIcon from "./plus.svg";

class FormPlusMinus extends React.Component {
  render() {
    return (
      <div>
        <div className="block w-full flex pr-10 pt-5">
          <img
            className="text-sm text-gray-dark py-3 px-4 border border-gray-border border-r-0 text-center"
            onClick={this.props.minusClicked}
            data-name={this.props.name}
            data-value={this.props.value}
            data-max={this.props.max}
            src={MinusIcon}
            alt="minus icon"
          />
          <input
            className="block w-full text-gray-dark border border-gray-border py-3 px-4 leading-tight z-2 text-center"
            type="text"
            max={this.props.max}
            name={this.props.name}
            onChange={this.props.inputChanged}
            placeholder={this.props.placeholderText}
            data-prefix={this.props.prefix || ""}
            data-suffix={this.props.suffix || ""}
            value={`${this.props.prefix || ""}${this.props.value}${this.props
              .suffix || ""}`}
          />
          <img
            className="text-sm text-gray-text py-3 px-4 border border-gray-border border-l-0 text-center"
            onClick={this.props.plusClicked}
            data-name={this.props.name}
            data-value={this.props.value}
            data-max={this.props.max}
            src={PlusIcon}
            alt="plus icon"
          />
        </div>
      </div>
    );
  }
}

export default FormPlusMinus;

import React from "react";
import MinusIcon from "./minuspath.svg";
import PlusIcon from "./plus.svg";

class FormPlusMinus extends React.Component {
    inputValue = Number(this.props.placeholderText.slice());
    changeInputMinus = () => {
        return this.inputValue - 1
    }

    changeInputPlus = () => {
        return this.inputValue + 1
    }

    render() {
        return <div>
            <div className="block w-full flex pr-10 pt-5">
                <img
                    className="text-sm text-gray-dark py-3 px-4 border border-gray-border border-r-0 text-center"
                    onClick= {this.changeInputMinus}
                    src={MinusIcon}
                    alt="minus icon"/>
                <input
                    className="block w-full text-gray-dark border border-gray-border py-3 px-4 leading-tight z-2 text-center"
                    type="text"
                    value={this.props.placeholderText}/>
                <img
                    className="text-sm text-gray-text py-3 px-4 border border-gray-border border-l-0 text-center"
                    onClick= {this.changeInputPlus}
                    src={PlusIcon}
                    alt="plus icon"/>
            </div>
        </div>
    }
}

export default FormPlusMinus;
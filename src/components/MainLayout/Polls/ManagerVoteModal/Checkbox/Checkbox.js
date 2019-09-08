import React from "react";

class Checkbox extends React.Component {
    render() {
        return <div className=" flex flex-row w-full items-baseline justify-between px-4 py-4">
            <label className="text-lg text-gray-dark">{this.props.text}</label>
            <input type="checkbox"/>
        </div>
    }
}

export default Checkbox;
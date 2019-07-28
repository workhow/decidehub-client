import React from "react";

class Checkbox extends React.Component {
    render () {
        return <div className="w-full px-3 items-baseline">
        <input type="checkbox" className="mr-10"/><label className="text-xs text-gray-text">{this.props.text}.</label>
        </div>
    }
}

export default Checkbox;
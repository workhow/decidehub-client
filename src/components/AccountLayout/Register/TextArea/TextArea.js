import React from "react";

class TextArea extends React.Component {
    render() {
        return <div>
            <label className="block tracking-wide text-xs mb-2 text-gray-dark">
                {this.props.labelText}
            </label>
            <div className="block text-gray-700 w-full flex">
                <textarea
                    className="appearance-none block w-full border border-gray-border py-3 px-4 leading-tight text-xs text-gray-text"
                    id="poll-explanation"
                    rows="4">{this.props.placeholderText}</textarea>
            </div>
        </div>
    }
}

export default TextArea;
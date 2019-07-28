import React from "react";

class FormSuffix extends React.Component {
    render () {
        return <div>       
        <label className="block tracking-wide text-xs mb-2 text-gray-dark">
            {this.props.labelText}
        </label>
        <div className="block text-gray-700 w-full flex">
            <input className="appearance-none block w-full text-gray-900 border border-gray-border py-3 px-4 leading-tight z-2 text-right" id="grid-password" type="text" placeholder= {this.props.placeholderText} />
            <span className="text-sm text-gray-text bg-gray-bg py-3 px-4 border border-gray-border border-l-0 text-center">{this.props.suffixText}</span>
        </div>
    </div>  
    }
}

export default FormSuffix;
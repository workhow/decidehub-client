import React, { Component } from 'react'

class SubHeader extends Component {
    render() {
        return (
            <div>
                <p className="text-sm text-gray-text">{this.props.text}</p>
            </div>
        )
    }
}

export default SubHeader;
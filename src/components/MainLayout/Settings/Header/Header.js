import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <p className="text-2xl text-gray-dark w-2/3">{this.props.text}</p>
            </div>
        )
    }
}

export default Header;

import React, {Component} from 'react'

class SettingsCard extends Component {
    render() {
        return (
            <div
                className='flex flex-row bg-white items-baseline px-5 py-2 border border-gray-light w-2/3 m-auto text-sm mb-4'>{this.props.children}</div>
        )
    }
}

export default SettingsCard;

import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Card extends Component {

    render() {
        return (
            <div
                className='flex flex-col items-center bg-white py-5 border border-gray-light m-5'>
                <img
                    src={this.props.imgLink}
                    alt='profile pic'
                    className='rounded-full h-auto p-2 md:p-4'/>
                <div>
                    <div className='p-2 md:p-4 flex flex-col text-center'>
                        <h3 className='text-xl text-gray-dark'>{this.props.name}</h3>
                        <p className=' text-sm lg:text-base text-gray-text py-5'>{this.props.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
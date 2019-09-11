import React, {Component} from 'react';
import Button from "../../../AccountLayout/Register/Button/Button";
import AuthorithyLogoTwo from "../../yetki2.svg";

class CongratsAuthModal extends Component {
    render() {
        return (
            <div className="flex flex-col pr-3 mt-8">
                <p className="text-2xl text-gray-dark w-1/2 align-left pl-2">Tebrikler Oylama’yı oluşturdun</p>
                <div className="flex flex-col justify-center mt-24 px-4">
                    <img src={AuthorithyLogoTwo} alt="illustration authority"/>
                    <p className="text-base mt-12 text-gray-dark w-2/3 self-center text-center">Bu kadar demokrasi düşkünü olduğun için seni tebrik ederiz.</p>
                </div>
                <div className="flex flex-col self-center w-1/2 mt-24">
                    <Button text="Devam Et" onClick={this.props.toggleDrawer('authvotemodal', 'right', true)}/>
                </div>
            </div>
        )
    }
}

export default CongratsAuthModal;
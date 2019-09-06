import React from "react";
import FormBlock from "../../AccountLayout/Register/FormBlockTwo/FormBlockTwo";

class InviteNewUser extends React.Component {
    render() {
        return <div className='flex flex-col md:flex-row items-start md:items-center justify-around bg-white content-wrapper w-3/5 p-8 my-5 m-auto'>
            <p className="p-2 md:p-4">{this.props.text}</p>
            <div className="mr-2">
            <FormBlock placeholderText="Adini ve soyadini girin"/>
            </div>
            <div className="mr-2">
            <FormBlock placeholderText="E-mail adresini girin"/>
            </div>
            <button className="border border-gray-dark text-gray-dark font-bold uppercase p-3 mt-4 md:mt-2 text-center text-xs w-1/6">
            Ekle
            </button>
        </div>  
    }
}

export default InviteNewUser;
import React from "react";
import FormBlock from "../Register/FormBlock/FormBlock";
import Button from "../Register/Button/Button"

class ResetPassword extends React.Component {
    render () {
        return <div className="flex flex-wrap mx-3 mb-6">
        <div className="w-full px-3 mt-20">
            <p className="text-2xl mb-10 mt-5 text-gray-dark">Şifre Kurtarma</p>
            <div className="mb-5">
                <FormBlock labelText="E-mail" placeholderText="example@decidehub.com"/>
            </div>

            <FormBlock labelText="Kodunuzu girin" placeholderText=" - - - - - - "/>
            <p className="text-xs mt-5 text-gray-dark text-right">Tekrar Gönder</p>
            <div className="">
                <Button text="Devam Et"/>
            </div>

        </div>
    </div>
    }
}

export default ResetPassword;
import React from "react";
import FormBlock from "../Register/FormBlock/FormBlock";
import FormSuffix from "../Register/FormSuffix/FormSuffix";
import Button from "../Register/Button/Button";
import Checkbox from "../Register/Checkbox/Checkbox";
import ButtonSubtext from "../Register/ButtonSubtext/ButtonSubtext";

class SignIn extends React.Component {
    render () {
        return <div className="flex flex-wrap mx-3 mb-6 bg-white">
        <div className="w-full px-3 mt-20">
            <p className="text-2xl mb-10 mt-5 text-gray-dark">Giriş Yapın</p>
            <div className="mb-5">
                <FormSuffix labelText="Team Name" suffixText=".decidehub.com" placeholderText="Enter your team name"/>
            </div>
            <div className="mb-5">
                <FormBlock labelText="E-mail" placeholderText="example@decidehub.com"/>
            </div>
            <div className="w-full flex justify-between items-baseline">
                <div className="inline-block">
                    <Checkbox text="Beni hatırla"/>
                </div>
                <div className="inline-block">
                    <p className="text-xs text-gray-dark font-bold text-right">Şifremi Unuttum</p>
                </div>
            </div>
            <div>
                <Button text="Devam Et"/>
            </div>
			<ButtonSubtext text="Don't have an account?" linkText="Sign up here" linkUrl="/login"/>
        </div>
    </div>
    }
}

export default SignIn;
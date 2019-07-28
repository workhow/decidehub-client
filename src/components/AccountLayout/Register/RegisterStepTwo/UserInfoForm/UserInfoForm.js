import React from "react";
import "./UserInfoForm.css";
import Button from "../../Button/Button";
import ButtonSubtext from "../../ButtonSubtext/ButtonSubtext";
import Checkbox from "../../Checkbox/Checkbox";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTwo from "../../FormBlockTwo/FormBlockTwo"

class UserInfoForm extends React.Component {
    render () {
        return <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-1/2 px-3 my-5">
          <FormBlockTwo labelText="Yönetici Adı" placeholderText="Ad"/>
        </div>
        <div className="w-1/2 px-3 my-5">
          <FormBlockTwo labelText="Soyadı" placeholderText="Soyad"/>
        </div>

        <div className="w-full px-3">
          <FormBlock labelText="E-mail" placeholderText="example@decidehub.com"/>
        </div>

        <div className="w-1/2 px-3 my-5">
            <FormBlockTwo labelText="Şifre" placeholderText=""/>
        </div>
        <div className="w-1/2 px-3 my-5">
            <FormBlockTwo labelText="Şifre Doğrula" placeholderText=""/>
        </div>

        <Checkbox text="Okudum, onaylıyorum."/>
        
        <div className="w-full px-3">
          <Button text="Hesap Oluştur" />
          <ButtonSubtext text="Zaten bir hesabınız mı var?" textLink="Giriş Yapın" linkUrl="/login"/>
        </div>
      </div>
    }
}

export default UserInfoForm;
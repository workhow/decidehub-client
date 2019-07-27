import React from "react";
import "./UserInfoForm.css";

class UserInfoForm extends React.Component {
    render () {
        return <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-1/2 px-3 my-5">
            <label className="block tracking-wide text-xs mb-2 text-gray-dark">
            Yönetici Adı
            </label>
            <div className="block text-gray-700 w-full flex">
                <input className="appearance-none block w-full border border-gray-border py-3 px-4 leading-tight text-xs text-gray-text" id="grid-password" type="text" placeholder="Ad" />
            </div>
        </div>
        <div className="w-1/2 px-3 my-5">
            <label className="block tracking-wide text-xs mb-2 text-gray-dark">
            Soyadı
            </label>
            <div className="block text-gray-700 w-full flex">
                <input className="appearance-none block w-full border border-gray-border py-3 px-4 leading-tight text-xs text-gray-text" id="grid-password" type="text" placeholder="Soyad" />
            </div>
        </div>

        <div className="w-full px-3">
          <label className="block tracking-wide text-xs mb-2 text-gray-dark">
            E-mail
          </label>
          <div className="block text-gray-700 w-full flex">
            <input className="appearance-none block w-full border border-gray-border py-3 px-4 leading-tight text-xs text-gray-text" id="grid-password" type="text" placeholder="example@decidehub.com" />
          </div>
        </div>

        <div className="w-1/2 px-3 my-5">
            <label className="block tracking-wide text-xs mb-2 text-gray-dark">
            Şifre
            </label>
            <div className="block text-gray-700 w-full flex">
                <input className="appearance-none block w-full text-gray-900 border border-gray-border py-3 px-4 leading-tight" id="grid-password" type="text" />
            </div>
        </div>
        <div className="w-1/2 px-3 my-5">
            <label className="block tracking-wide text-xs mb-2 text-gray-dark">
            Şifre Doğrula
            </label>
            <div className="block text-gray-700 w-full flex">
                <input className="appearance-none block w-full text-gray-900 border border-gray-border py-3 px-4 leading-tight" id="grid-password" type="text" />
            </div>
        </div>

        <div className="w-full px-3 items-baseline">
        <input type="checkbox" className="mr-10"/><label for="affirmation" className="text-xs text-gray-text">Okudum, onaylıyorum.</label>
        </div>

        <div className="w-full px-3">
          <button className="bg-gray-dark text-white uppercase py-3 px-4 mt-12 mb-20 text-xs w-full">
          Hesap Oluştur
          </button>
          <div>
            <span className="text-gray-text text-xs mr-5">Zaten bir hesabınız mı var?</span>
            <span><a href="/signin" className="text-sm text-gray-dark">Giriş Yapın</a></span>
          </div>
        </div>
      </div>
    }
}

export default UserInfoForm;
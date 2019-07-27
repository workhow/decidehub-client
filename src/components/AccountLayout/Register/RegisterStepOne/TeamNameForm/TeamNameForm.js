import React from "react";
import "./TeamNameForm.css";

class TeamNameForm extends React.Component {
    render () {
        return   <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block tracking-wide text-xs mb-2">
            Team Name
          </label>
          <div className="block text-gray-700 w-full flex">
            <input className="appearance-none block w-full text-gray-900 border border-gray-border py-3 px-4 leading-tight z-2 text-right" id="grid-password" type="text" placeholder="Enter your team name" />
            <span className="text-sm text-gray-text bg-gray-bg py-3 px-4 border border-gray-border border-l-0 text-center">.decidehub.com</span>
          </div>
          <button className="bg-gray-dark text-white  font-bold uppercase py-3 px-4 mt-16 mb-12 text-xs w-full">
              Devam Et
          </button>
          <div>
            <span className="text-gray-text text-xs text-gray-500 mr-5">Zaten bir hesabınız mı var?</span>
            <span><a href="/signin" className="text-sm text-gray-dark">Giriş Yapın</a></span>
          </div>
        </div>
      </div>
    }
}

export default TeamNameForm;
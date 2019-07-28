import React from "react";
import "./TeamNameForm.css";
import Button from "../../Button/Button";
import FormSuffix from "../../FormSuffix/FormSuffix"
import ButtonSubtext from "../../ButtonSubtext/ButtonSubtext"

class TeamNameForm extends React.Component {
    render () {
        return   <div className="flex flex-wrap -mx-3 mb-6 bg-white">
        <div className="w-full px-3">
          <FormSuffix suffixText=".decidehub.com" labelText="Team Name" placeholderText="Enter your team name"/>
          <Button text="Devam Et"/>
          <ButtonSubtext text="Zaten bir hesabınız mı var?" linkText="Giriş Yapın" linkUrl="/login"/>
        </div>
      </div>
    }
}

export default TeamNameForm;
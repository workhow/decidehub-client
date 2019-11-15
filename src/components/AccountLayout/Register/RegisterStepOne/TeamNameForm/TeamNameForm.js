import React from "react";
import "./TeamNameForm.css";
import Button from "../../Button/Button";
import FormSuffix from "../../FormSuffix/FormSuffix";
import ButtonSubtext from "../../ButtonSubtext/ButtonSubtext";

class TeamNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subdomain: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    this.props.setFormData(this.state);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="flex flex-wrap -mx-3 mb-6 bg-white">
        <div className="w-full px-3">
          <FormSuffix
            handleInputChange={this.handleInputChange}
            name="subdomain"
            suffixText=".decidehub.com"
            labelText="Takım Adı"
            minLength="5"
            maxLength="100"
            placeholderText="Takım adınızı giriniz"
          />
          <div className="mt-12">
            <Button text="Devam Et" onClick={this.submitForm} />
            <ButtonSubtext
              text="Zaten bir hesabınız mı var?"
              linkText="Giriş Yapın"
              linkUrl="/login"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TeamNameForm;

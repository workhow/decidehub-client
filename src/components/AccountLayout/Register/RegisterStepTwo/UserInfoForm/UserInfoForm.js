import React from "react";
import "./UserInfoForm.css";
import Button from "../../Button/Button";
import ButtonSubtext from "../../ButtonSubtext/ButtonSubtext";
import Checkbox from "../../Checkbox/Checkbox";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTwo from "../../FormBlockTwo/FormBlockTwo";

class UserInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {};
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  submitForm() {
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password &&
      this.state.confirmPassword &&
      this.state.password === this.state.confirmPassword &&
      this.state.accept
    ) {
      this.props.setFormData(this.state);
    }
  }

  render() {
    return (
      <div className="flex flex-wrap -mx-3 mb-6 bg-white">
        <div className="w-1/2 px-3 my-5">
          <FormBlockTwo
            handleInputChange={this.handleInputChange}
            name="firstName"
            labelText="Yönetici Adı"
            placeholderText="Ad"
          />
        </div>
        <div className="w-1/2 px-3 my-5">
          <FormBlockTwo
            handleInputChange={this.handleInputChange}
            name="lastName"
            labelText="Soyadı"
            placeholderText="Soyad"
          />
        </div>

        <div className="w-full px-3">
          <FormBlock
            name="email"
            handleInputChange={this.handleInputChange}
            labelText="E-mail"
            placeholderText="example@decidehub.com"
          />
        </div>

        <div className="w-1/2 px-3 my-5">
          <FormBlockTwo
            name="password"
            labelText="Şifre"
            type="password"
            placeholderText=""
            minLength="8"
            handleInputChange={this.handleInputChange}
          />
        </div>
        <div className="w-1/2 px-3 my-5">
          <FormBlockTwo
            name="confirmPassword"
            labelText="Şifre Doğrula"
            type="password"
            minLength="8"
            placeholderText=""
            handleInputChange={this.handleInputChange}
          />
        </div>

        <Checkbox
          name="accept"
          text="Okudum, onaylıyorum."
          handleInputChange={this.handleInputChange}
        />

        <div className="w-full px-3 mt-16">
          <Button text="Hesap Oluştur" onClick={this.submitForm} />
          <ButtonSubtext
            text="Zaten bir hesabınız mı var?"
            linkText="Giriş Yapın"
            linkUrl="/login"
          />
        </div>
      </div>
    );
  }
}

export default UserInfoForm;

import React from "react";
import { Redirect } from "react-router-dom";
import FormBlock from "../Register/FormBlock/FormBlock";
import FormSuffix from "../Register/FormSuffix/FormSuffix";
import Button from "../Register/Button/Button";
import Checkbox from "../Register/Checkbox/Checkbox";
import ButtonSubtext from "../Register/ButtonSubtext/ButtonSubtext";
import Util from "../../../util";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subdomain: Util.getSubdomain(),
      token: localStorage.currentUserToken
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  submitForm() {
    const signInPath = Util.pathForSubdomain(this.state.subdomain, "");
    axios
      .post(signInPath, {
        email: this.state.email,
        password: this.state.password,
        rememberMe: this.state.rememberMe === "on"
      })
      .then(response => {
        if (response.data.token) {
          localStorage.currentUserToken = response.data.token;
          this.setState({ ...this.state, token: response.data.token });
        }
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data[0].description);
        } else {
          alert(error);
        }
      });
  }

  render() {
    return (
      <div className="flex flex-wrap mx-3 mb-6 bg-white">
        {this.state.token && <Redirect to="/" />}
        <div className="w-full px-3 mt-20">
          <p className="text-2xl mb-10 mt-5 text-gray-dark">Giriş Yapın</p>
          <div className="mb-5">
            <FormSuffix
              labelText="Takım Adı"
              name="subdomain"
              value={this.state.subdomain}
              handleInputChange={this.handleInputChange}
              suffixText=".decidehub.com"
              placeholderText="Takım adınızı buraya girin"
            />
          </div>
          <div className="mb-5">
            <FormBlock
              labelText="E-mail"
              name="email"
              handleInputChange={this.handleInputChange}
              placeholderText="example@decidehub.com"
            />
          </div>
          <div className="mb-5">
            <FormBlock
              labelText="Şifre"
              name="password"
              type="password"
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className="w-full flex justify-between items-baseline">
            <div className="inline-block">
              <Checkbox
                name="rememberMe"
                handleInputChange={this.handleInputChange}
                text="Beni hatırla"
              />
            </div>
            <div className="inline-block">
              <p className="text-xs text-gray-dark font-bold text-right">
                <a href="/reset-password">Şifremi Unuttum</a>
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Button text="Devam Et" onClick={this.submitForm} />
          </div>

          <ButtonSubtext
            text="Hesabınız yok mu?"
            linkText="Buradan kayıt olun"
            linkUrl="/signup"
          />
        </div>
      </div>
    );
  }
}

export default SignIn;

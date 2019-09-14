import React from "react";
import { Redirect } from "react-router-dom";
import FormSuffix from "../Register/FormSuffix/FormSuffix";
import FormBlock from "../Register/FormBlock/FormBlock";
import Button from "../Register/Button/Button";
import Util from "../../../util";
import axios from "axios";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subdomain: Util.getSubdomain(),
      email: "",
      mailSent: false
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
    const resetPasswordPath = Util.pathForSubdomain(
      this.state.subdomain,
      "account/forgotPassword"
    );

    axios
      .post(resetPasswordPath, {
        email: this.state.email,
        subdomain: this.state.subdomain
      })
      .then(response => {
        if (response.data) {
          this.setState({ ...this.state, mailSent: true });
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
    if (this.state.mailSent) {
      return <Redirect to="/" />;
    }
    return (
      <div className="flex flex-wrap mx-3 mb-6 bg-white">
        <div className="w-full px-3 mt-20">
          <p className="text-2xl mb-10 mt-5 text-gray-dark">Şifre Kurtarma</p>

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
              name="email"
              value={this.state.email}
              handleInputChange={this.handleInputChange}
              labelText="E-mail"
              placeholderText="example@decidehub.com"
            />
          </div>

          <div className="mt-12">
            <Button text="Şifremi Sıfırla" onClick={this.submitForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;

import React from "react";
import { Redirect } from "react-router-dom";
import FormSuffix from "../Register/FormSuffix/FormSuffix";
import FormBlock from "../Register/FormBlock/FormBlock";
import Button from "../Register/Button/Button";
import Util from "../../../util";
import axios from "axios";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    const queryParams = Util.getQueryParams();

    this.state = {
      subdomain: Util.getSubdomain(),
      email: queryParams.email,
      password: "",
      confirmPassword: "",
      userId: queryParams.userId,
      code: queryParams.token,
      gen: queryParams.gen,
      passwordReset: false
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
      "account/resetPassword"
    );

    axios
      .post(resetPasswordPath, {
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        email: this.state.email,
        userId: this.state.userId,
        code: this.state.code,
        subdomain: this.state.subdomain
      })
      .then(response => {
        if (response.data) {
          this.setState({ ...this.state, passwordReset: true });
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
    if (this.state.passwordReset) {
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
              readOnly={true}
              value={this.state.subdomain}
              suffixText=".decidehub.com"
              placeholderText="Takım adınızı buraya girin"
            />
          </div>
          <div className="mb-5">
            <FormBlock
              readOnly={true}
              name="email"
              value={this.state.email}
              labelText="Email"
            />
          </div>
          <div className="mb-5">
            <FormBlock
              name="password"
              value={this.state.password}
              type="password"
              handleInputChange={this.handleInputChange}
              labelText="Şifre"
            />
          </div>
          <div className="mb-5">
            <FormBlock
              name="confirmPassword"
              value={this.state.confirmPassword}
              type="password"
              handleInputChange={this.handleInputChange}
              labelText="Şifre Doğrula"
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

export default ResetPassword;

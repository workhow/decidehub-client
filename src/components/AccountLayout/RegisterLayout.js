import React from "react";
import SignupStepOneLayout from "./SignUpStepOneLayout";
import SignupStepTwoLayout from "./SignUpStepTwoLayout";
import axios from "axios";
import Util from "../../util";

class RegisterLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subdomain: "" };

    this.setFormData = this.setFormData.bind(this);
  }

  setFormData(formData) {
    this.setState({ ...this.state, ...formData }, () => {
      if (
        this.state.subdomain &&
        this.state.firstName &&
        this.state.lastName &&
        this.state.email &&
        this.state.password &&
        this.state.confirmPassword &&
        this.state.password === this.state.confirmPassword &&
        this.state.accept
      ) {
        const accountRegisterPath = Util.pathForSubdomain(
          this.state.subdomain,
          "account/register"
        );
        axios
          .post(accountRegisterPath, {
            tenantId: this.state.subdomain,
            hostName: `${this.state.subdomain}.decidehub.com`,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            lang: "tr"
          })
          .then(() => {
            alert("Success");
          })
          .catch(error => {
            if (error.response) {
              alert(error.response.data[0].description);
            } else {
              alert(error);
            }
          });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.subdomain ? (
          <SignupStepTwoLayout setFormData={this.setFormData} />
        ) : (
          <SignupStepOneLayout setFormData={this.setFormData} />
        )}
      </div>
    );
  }
}

export default RegisterLayout;

import React from "react";
import "./RegisterStepTwo.css";
import UserInfoForm from "./UserInfoForm/UserInfoForm";

class RegisterStepTwo extends React.Component {
  render() {
    return (
      <div className="h-full">
        <p className="text-2xl mb-10 mt-5 text-gray-dark">Hesap Oluştur</p>
        <div>
          <UserInfoForm setFormData={this.props.setFormData} />
        </div>
      </div>
    );
  }
}

export default RegisterStepTwo;

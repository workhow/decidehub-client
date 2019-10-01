import React from "react";
import AccountRightPanel from "./AccountRightPanel/AccountRightPanel";
import RegisterStepOne from "./Register/RegisterStepOne/RegisterStepOne";

class SignUpLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="w-full lg:w-2/5 h-screen p-12 lg:p-16 xl:p-20">
            <RegisterStepOne setFormData={this.props.setFormData} />
          </div>
          <div className="hidden lg:block w-full lg:w-3/5 h-screen">
            <AccountRightPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpLayout;

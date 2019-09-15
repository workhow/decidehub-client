import React from "react";
import AccountRightPanel from "./AccountRightPanel/AccountRightPanel";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

class ForgotPasswordLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="w-full lg:w-2/5 h-screen p-20">
            <ForgotPassword />
          </div>
          <div className="order-first lg:order-last w-full lg:w-3/5 h-screen">
            <AccountRightPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordLayout;
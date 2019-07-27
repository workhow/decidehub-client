import React from "react";
import "./AccountLayout.css";
import AccountRightPanel from "./AccountRightPanel/AccountRightPanel"
import RegisterStepTwo from "./Register/RegisterStepTwo/RegisterStepTwo"

class AccountLayout extends React.Component {
    render() {
        return <div>
            <div className="flex">
                <div className="w-2/5 h-screen p-20">
                    <RegisterStepTwo />
                </div>
                <div className="w-3/5 h-screen">
                    <AccountRightPanel />
                </div>
            </div>
        </div>

    }
}

export default AccountLayout;
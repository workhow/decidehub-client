import React from "react";
import AccountRightPanel from "./AccountRightPanel/AccountRightPanel";
import RegisterStepOne from "./Register/RegisterStepOne/RegisterStepOne";
import Logo from "../SetupLayout/SetupTopBanner/logo.svg";

class SignUpLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="flex flex-col lg:flex-row bg-white">
                    <img
                        className="mt-12 ml-12 mb-8 lg:hidden self-start"
                        src={Logo}
                        alt="Decidehub coloured logo"/>
                    <div className="w-full lg:w-2/5 h-screen px-12 lg:p-16 xl:p-20">
                        <RegisterStepOne setFormData={this.props.setFormData}/>
                    </div>
                    <div className="hidden lg:block w-full lg:w-3/5 h-screen">
                        <AccountRightPanel/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpLayout;

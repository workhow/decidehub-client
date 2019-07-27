import React from "react";
import "./AccountRightPanel.css";
import Logo from "./Logo/Logo";
import MiddleText from "./MiddleText/MiddleText";
import Footer from "./Footer/Footer";

class AccountRightPanel extends React.Component {
    render() {
        return <div className="RightSidePanel flex flex-col justify-between">
            <Logo />
            <MiddleText />
            <Footer />
        </div>
    }
}

export default AccountRightPanel;
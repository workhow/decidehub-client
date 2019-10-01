import React, {Component} from "react";
import {Link} from "react-router-dom";
import Logo from "./navbar-logo.svg";
import MainLogo from "./main.svg";
import PolicyLogo from "./yonetmelik.svg";
import PollLogo from "./oylamalar.svg";
import UsersLogo from "./uyeler.svg";
import SettingsLogo from "./ayarlar.svg";
import ProfilePicture from "../../AccountLayout/Register/RegisterStepOne/manager.svg";
import NavbarDrawer from "./NavbarDrawer/NavbarDrawer";
import Bars from "./burger.svg";
import "./LeftNavbar.css";

class LeftNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
        };

        this.toggleDrawer = this
            .toggleDrawer
            .bind(this);
    }

    toggleDrawer(side, open) {
        return event => {
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }

            this.setState({
                ...this.state,
                [side]: open
            });
        };
    }

    render() {
        return (
            <div>
                <div className="main-nav m-0 p- inline-block md:hidden">
                    <img 
                        src={Bars}
                        alt="menu bars logo"
                        onClick={this.toggleDrawer("left", true)}/>
                </div>
                <div className="hidden md:block">
                    <div
                        className="flex flex-col block justify-between items-center h-full w-24 fixed top-0 bottom-0 z-1 bg-white">
                        <div>
                            <Link to="/home" className="flex justify-center">
                                <img src={Logo} alt="decidehub logo" className="navbar-logo m-12"/>
                            </Link>
                        </div>
                        <div className="flex flex-col mx-auto items-start">
                            <Link to="/home" className="my-4 navbar-icon">
                                <img src={MainLogo} alt="main page logo"/>
                            </Link>
                            <Link to="/policy" className="my-4 navbar-icon">
                                <img src={PolicyLogo} alt="policy page logo"/>
                            </Link>
                            <Link to="/polls" className="my-4 navbar-icon">
                                <img src={PollLogo} alt="poll page logo"/>
                            </Link>
                            <Link to="/users" className="my-4 navbar-icon">
                                <img src={UsersLogo} alt="users page logo"/>
                            </Link>
                        </div>
                        <div className="flex flex-col flex-end items-center justify-center">
                            <Link
                                to="/settings"
                                className="text-gray-text hover:text-gray-dark text-2xl mb-6">
                                <img src={SettingsLogo} alt="settings logo"/>
                            </Link>
                            <div className="navbar-logo mb-12">
                                <img
                                    className="rounded-full"
                                    src={localStorage.userImage || ProfilePicture}
                                    alt="main page logo"/>
                            </div>
                        </div>
                        <NavbarDrawer left={this.state.left} toggleDrawer={this.toggleDrawer}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftNavbar;

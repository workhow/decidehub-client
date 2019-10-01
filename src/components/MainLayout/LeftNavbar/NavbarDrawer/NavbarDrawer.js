import React from "react";
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import CloseLogo from "../../../MainLayout/Users/kapat.svg";
import Logo from "../../../SetupLayout/SetupTopBanner/logo.svg";
import MainLogo from "../main.svg";
import PolicyLogo from "../yonetmelik.svg";
import PollLogo from "../oylamalar.svg";
import UsersLogo from "../uyeler.svg";
import SettingsLogo from "../ayarlar.svg";
import ProfilePicture from "../../../AccountLayout/Register/RegisterStepOne/manager.svg";

export default function NavbarDrawer(props) {

    return (
        <div>
            <Drawer
                anchor="left"
                open={props.left}
                onClose={props.toggleDrawer("left", false)}>
                <div className="flex flex-col">
                    <div className="pl-4 pt-8 pb-8 bg-white flex flex-row-reverse">
                        <div>
                            <img
                                src={CloseLogo}
                                alt="cross logo for closing the modal"
                                onClick={props.toggleDrawer("left", false)}
                                className="cursor-pointer mr-4"/>
                        </div>
                        <div className="mr-auto w-3/5">
                            <img src={Logo} alt="Decidehub coloured logo"/>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-start pl-8 font-light text-gray-dark text-base">
                        <Link to="/home" className="my-4 navbar-icon">
                            <img src={MainLogo} alt="main page logo" className="inline align-baseline"/>
                            <p className="pl-2 inline">Ana Panel</p>
                        </Link>
                        <Link to="/policy" className="my-4 navbar-icon">
                            <img src={PolicyLogo} alt="policy page logo" className="inline align-baseline"/>
                            <p className="pl-2 inline">Yönetmelik</p>
                        </Link>
                        <Link to="/polls" className="my-4 navbar-icon">
                            <img src={PollLogo} alt="poll page logo" className="inline align-baseline"/>
                            <p className="pl-2 inline">Oylamalar</p>
                        </Link>
                        <Link to="/users" className="my-4 navbar-icon">
                            <img src={UsersLogo} alt="users page logo" className="inline align-baseline"/>
                            <p className="pl-2 inline">Yönetici</p>
                        </Link>
                        <hr className="text-gray-text w-5/6 my-8"></hr>
                        <Link to="/settings" className="text-gray-dark text-lg my-6">
                            <img src={SettingsLogo} alt="settings logo" className="inline align-baseline"/>
                            <p className="pl-2 inline text-base">Ayarlar</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col flex-end items-start ml-8 mt-32 mb-8">
                    <div className="navbar-logo">
                        <img
                            className="rounded-full"
                            src={localStorage.userImage || ProfilePicture}
                            alt="main page logo"/>
                        <p className="text-gray-dark font-light text-sm pt-2 w-full">Copyright 2019</p>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}
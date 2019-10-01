import React, { Component } from "react";
import Logo from "../logo.svg";
import Bars from "./burger.svg";
import LandingNavbarDrawer from "./LandingNavbarDrawer/LandingNavbarDrawer";
import "./LandingNavbar.css";

class LandingNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      modalType: "",
      modalTitle: "",
      modalText: "",
      modalOpen: false,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  
  toggleDrawer(side, open) {
    return event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      this.setState({
        ...this.state,
        [side]: open,
      });
    };
  }

  render() {
    return (
      <div className="fixed w-full z-50">
        <nav className="py-6 px-6 flex justify-between navbar-main items-center">
          <a href="/">
            <img
              src={Logo}
              alt="company logo"
              className="text-2xl no-underline tracking-tight brand"
            />
          </a>
          <div className="main-nav m-0 p-0 inline md:hidden">
              <img
                className="text-2xl text-gray-dark"
                src= {Bars} 
                alt="menu bars logo"
                onClick= {this.toggleDrawer("right", true)}
                />
          </div>
          <div className="main-nav m-0 p-0 text-gray-dark hidden md:block">
            <span>
              <a
                href="/signup"
                className="text-sm sm:text-base md:text-lg no-underline inline navbar-link pr-4 sm:pr-8">
                Kayıt Ol
              </a>
            </span>
            <span>
              <a
                href="/login"
                className="text-sm sm:text-base md:text-lg no-underline inline navbar-link pr-4 sm:pr-8">
                Giriş yap
              </a>
            </span>
            <span>
              <a
                href="#about-us"
                className="text-sm sm:text-base md:text-lg no-underline inline navbar-link pr-4 sm:pr-8">
                Hakkımızda
              </a>
            </span>
            <span>
              <a
                href="https://support.workhow.com/hc/en-us/requests/new"
                className="text-sm sm:text-base md:text-lg no-underline inline navbar-link">
                Destek
              </a>
            </span>
          </div>
        </nav>
        <LandingNavbarDrawer
          right={this.state.right}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  }
}

export default LandingNavbar;

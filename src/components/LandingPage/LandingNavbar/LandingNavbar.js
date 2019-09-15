import React, { Component } from "react";
import Logo from "../logo.svg";
import "./LandingNavbar.css";

class LandingNavbar extends Component {
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
          <div className="main-nav m-0 p-0 inline text-gray-dark">
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
      </div>
    );
  }
}

export default LandingNavbar;

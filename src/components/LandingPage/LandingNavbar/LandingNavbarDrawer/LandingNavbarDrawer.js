import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CloseLogo from "../../../MainLayout/Users/kapat.svg";

export default function LandingNavbarDrawer(props) {

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.right}
        onClose={props.toggleDrawer("right", false)}>
        <div className="m-4 md:m-8 lg:m-12 mb-6 bg-white">
          <img
            src={CloseLogo}
            alt="cross logo for closing the modal"
            onClick={props.toggleDrawer("right", false)}
            className="flex flex row ml-auto cursor-pointer"
          />
        </div>
        <div className="m-0 p-0 no-underline text-gray-dark pl-8 sm:pl-12 pt-2">
            <div>
              <a
                href="/signup"
                className="text-base sm:text-lg block py-4">
                Kayıt Ol
              </a>
            </div>
            <div>
              <a
                href="/login"
                className="text-base sm:text-lg block pb-4">
                Giriş yap
              </a>
            </div>
            <div>
              <a
                href="#about-us"
                className="text-base sm:text-lg block pb-4">
                Hakkımızda
              </a>
            </div>
            <div>
              <a
                href="https://support.workhow.com/hc/en-us/requests/new"
                className="text-base sm:text-lg block pb-12">
                Destek
              </a>
            </div>
          </div>
          <hr className="text-gray-text"></hr>
          <p className="text-sm text-gray-text mx-auto pt-4">Decidehub, 2019</p>
      </Drawer>
    </div>
  );
}
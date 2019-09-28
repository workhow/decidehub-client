import React from "react";
import { Redirect } from "react-router-dom";
import SetupTopBanner from "../SetupLayout/SetupTopBanner/SetupTopBanner";
import "./NotFoundLayout.css";
import Button from "../AccountLayout/Register/Button/Button";

class NotFoundLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.redirectToHome = this.redirectToHome.bind(this);
  }

  redirectToHome() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="main-layout">
        <SetupTopBanner
          text="Bir yanlışlık olabilir sayfayı yenilemeyi denemelisin"
          subText="Ya da anasayfaya dönmelisin"
        />
        <div className="text-center p-20">
          <p className="text-gray-dark text-2xl">404</p>
        </div>
        <div className="flex flex-wrap w-2/12 m-auto">
          <Button text="ANA SAYFAYA DÖN" onClick={this.redirectToHome} />
        </div>
      </div>
    );
  }
}

export default NotFoundLayout;

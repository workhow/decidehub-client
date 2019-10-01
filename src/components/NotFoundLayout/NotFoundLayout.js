import React from "react";
import {Redirect} from "react-router-dom";
import Logo from "../SetupLayout/SetupTopBanner/logo.svg";
import BorderButton from "./BorderButton/BorderButton";
import NotFoundLogo from "./Asset 12.svg";
import "./NotFoundLayout.css";

class NotFoundLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.redirectToHome = this
            .redirectToHome
            .bind(this);
    }

    redirectToHome() {
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/home"/>;
        }
        return (
            <div className="main-layout">
                <div className=" light-background">
                    <img className="p-8" src={Logo} alt="Decidehub coloured logo"/>
                    <div className="py-16 lg:py-24">
                        <img className="mx-auto px-24" src={NotFoundLogo} alt="Not found logo"/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                  <div className="w-1/2 sm:w-3/5 text-center sm:text-left mt-8 md:mt-12 lg:mt-16">
                    <p className="text-gray-dark text-2xl mb-4 font-light">Bir yanlışlık olabilir sayfayı yenilemeyi denemelisin</p>
                    <p className="text-gray-text text-sm mb-4 lg:mb-12">Ya da anasayfaya dönmelisin</p>
                  </div>
                  <div className="w-1/2 sm:w-3/5 lg:w-1/6 self-center mt-8 lg:mt-16">
                    <BorderButton text="ANA SAYFAYA DÖN" onClick={this.redirectToHome}/>
                  </div>
                </div>
            </div>
        );
    }
}

export default NotFoundLayout;

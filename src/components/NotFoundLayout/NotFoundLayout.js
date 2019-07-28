import React from "react";
import SetupTopBanner from "../SetupLayout/SetupTopBanner/SetupTopBanner";
import "./NotFoundLayout.css";
import Button from "../AccountLayout/Register/Button/Button"

class NotFoundLayout extends React.Component {
    render () {
        return <div className="main-layout">
            <SetupTopBanner text="Bir yanlışlık olabilir sayfayı yenilemeyi denemelisin" subText="Ya da anasayfaya dönmelisin" />
            <div className="text-center p-20">
                <p className=" text-gray-dark text-2xl">404</p>
            </div>
            <div className="flex flex-wrap w-2/12 m-auto">
                <Button text="ANA SAYFAYA DÖN"/>
            </div>

        </div>
    }   
}

export default NotFoundLayout;
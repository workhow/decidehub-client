import React from "react";
import "./SetupTopBanner.css";
import logo from "./logo.svg";

class SetupTopBanner extends React.Component {
    render () {
        return <div className="top-banner w-full h-full">
            <img src={logo} alt="decidehub colored logo" className="p-12"/>
            <div className="w-3/5 m-auto">
                <p className="text-gray-dark text-2xl">Hoşgeldin! Decidehub deneyimi için diğer kullanıcıları davet etmelisin.</p>
                <p className="text-gray-text text-sm mt-4 mb-12">En az 3 kişi eklemelisin.</p>
            </div>
        </div>
    }
}

export default SetupTopBanner;
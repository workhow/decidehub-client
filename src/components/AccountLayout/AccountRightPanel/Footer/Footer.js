import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return <div className="text-white text-md py-8 mx-10 flex justify-center items-baseline">
                <a className="m-3" href="www.google.com" > Gizlilik Politikası </a>
                <a className="m-3" href="www.google.com"> Kişisel Verilerin İşlenmesi </a>
                <a className="m-3"href="www.google.com"> Kişisel Verilerin Korunması </a>
                <a className="m-3 font-medium text-xl" href="www.google.com"> workhow </a>
            </div>
    }
}

export default Footer;
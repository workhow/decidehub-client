import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return <div className="text-white text-m p-8 flex justify-between items-baseline">
                <p className="footerLinks m-3"><a href="www.google.com" > Gizlilik Politikası </a></p>
                <p className="footerLinks m-3"><a href="www.google.com"> Kişisel Verilerin İşlenmesi </a></p>
                <p className="footerLinks m-3"><a href="www.google.com"> Kişisel Verilerin Korunması </a></p>
                <p className="footerLinks m-3 font-medium text-xl"><a href="www.google.com"> workhow </a></p>
            </div>
    }
}

export default Footer;
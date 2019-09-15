import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="text-white text-md py-8 mx-10 flex justify-center items-baseline">
        <a
          className="m-3"
          href="https://decidehub.com/static/gizlilik-politikasi.pdf">
          Gizlilik Politikası
        </a>
        <a
          className="m-3"
          href="https://decidehub.com/static/kisisel-verilerin-islenmesi.pdf">
          Kişisel Verilerin İşlenmesi
        </a>
        <a
          className="m-3"
          href="https://decidehub.com/static/kisisel-verilerin-korunmasi.pdf">
          Kişisel Verilerin Korunması
        </a>
        <a className="m-3 font-medium text-xl" href="https://www.workhow.com">
          workhow
        </a>
      </div>
    );
  }
}

export default Footer;

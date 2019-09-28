import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LandingNavbar from "./LandingNavbar/LandingNavbar";
import InfoContainerRight from "./InfoContainerRight/InfoContainerRight";
import InfoContainerLeft from "./InfoContainerLeft/InfoContainerLeft";
import Footer from "./Footer/Footer";
import VotingLogo from "./Group 10.svg";
import ManagerLogo from "./yonetici.svg";
import ShareLogo from "./paylasim.svg";
import "./LandingPage.css";
import Util from "../../util";

class LandingPage extends Component {
  componentDidMount() {
    const subdomain = Util.getSubdomain();
    if (!subdomain && localStorage.currentUserToken) {
      localStorage.clear();
    }
  }

  render() {
    const subdomain = Util.getSubdomain();
    if (subdomain) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <LandingNavbar />
        <div className="wrapper">
          <div className="bg-white pt-12">
            <div className="flex flex-col md:flex-row items-center slogan-text">
              <div className="text-gray-dark pt-16 pb-8  md:px-4 lg:px-12 xl:px-24 w-2/3">
                <div className="px-4 md:px-12 rounded">
                  <p className="text-2xl md:text-3xl pb-8">Decidehub nedir?</p>
                  <p className="text-base lg:text-lg pb-4">
                    Decidehub en az 3 kişi olmak kaydı ile beraber çalışmak
                    isteyen her türlü grubun her türlü konuda oylama
                    yapabilmesini mümkün kılar.
                  </p>
                  <p className="text-base lg:text-lg pb-8">
                    Burada gruplar{" "}
                    <span className="text-emphasis">demokratik</span> ve{" "}
                    <span className="text-emphasis">kalıcı</span> kararlar alır.
                  </p>
                </div>
              </div>
              <img
                src={VotingLogo}
                alt="group of people voting illustration"
                className="w-full px-8 pb-8 order-first md:order-last"
              />
            </div>
          </div>
          <div
            className="static-one text-white flex justify-center flex-col"
            id="about-us">
            <InfoContainerRight
              title="Ne Kadar Güven, O Kadar Söz Hakkı"
              text="Decidehub, bir grubun her üyesinin geri kalanlarda toplayabildiği yetkiye göre oylamalarda söz sahibi olmasını sağlar. Decidehub oylamalarında herkesin sözü geçer ama diğerlerinin ona güvendiği kadar sözü geçer."
              logo={ManagerLogo}
            />
          </div>
          <div className="static-two text-gray-dark flex flex-col justify-center">
            <InfoContainerLeft
              title="Peki Yetki Nasıl Dağıtılır?"
              text="Decidehub'ı ilk defa kullanıyorsanız, ilk yapmanız gereken şey, yetki dağılımıdır. Bu dağılımda, herkes elindeki toplam 1000 yetki puanını diğer grup üyelerine paylaştırır. Böylece, herkesin ilerde gerçekleşecek oylamalarda sahip olacağı yetki ağırlığı belirlenmiş olur. Yani, 1400 puan toplayan kişi, 700 puan toplamış kişinin 2 katı söz sahibi olacaktır."
              logo={ShareLogo}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;

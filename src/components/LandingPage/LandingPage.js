import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LandingNavbar from "./LandingNavbar/LandingNavbar";
import InfoContainerRight from "./InfoContainerRight/InfoContainerRight";
import InfoContainerLeft from "./InfoContainerLeft/InfoContainerLeft";
import Footer from "./Footer/Footer";
import VotingLogo from "./Group 10.svg";
import ManagerLogo from "./yonetici.svg";
import PersonLogo from "./yetki.svg";
import ShareLogo from "./paylasim.svg";
import PolicyLogo from "./yonetmelik.svg";
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
    if (subdomain && subdomain !== "www") {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <LandingNavbar />
        <div className="wrapper">
          <div className="bg-white pt-12">
            <div className="flex flex-col md:flex-row items-center slogan-text">
              <div className="text-gray-dark pt-16 pb-8  md:px-4 lg:px-12 xl:px-24 w-2/3  text-justify">
                <div className="px-4 md:px-12 rounded">
                  <p className="text-2xl md:text-3xl pb-4">Decidehub nedir?</p>
                  <p className="text-base lg:text-lg pb-8">
                    Decidehub bir grubun yönetimini grupça yapmayı sağlayan bir
                    yönetim platformudur. Alınan kararlara tüm grubun isteyerek
                    uymasının yolunu açar. Daha kenetlenmiş ve herkesin daha çok
                    sahip çıktığı bir grup oluşturmak Decidehub ile çok daha
                    kolaydır.
                  </p>
                  <p className="text-2xl md:text-3xl pb-4">
                    Decidehub demokrasi değildir
                  </p>
                  <p className="text-base lg:text-lg pb-4">
                    Demokrasilerde seçme hakkı herkese eşit verilir fakat
                    Decidehub ile herkese önce farklı seçme güçleri
                    tanımlayabilirsiniz. Grubunuzda daha kıdemli kişilere
                    meclisi belirlemede daha yüksek bir belirleyici güç
                    tanımlayabilirsiniz.
                  </p>
                  <p className="text-base lg:text-lg pb-8">
                    Yine demokrasilerde meclis seçildikten sonra her meclis
                    üyesi eşit oy hakkına sahip olur fakat Decidehub ile her
                    meclis üyesinin kararlara etki gücü farklıdır. Decidehub her
                    meclis üyesinin, diğer üyelerden topladığı güvene oranla,
                    kararlarda farklı söz sahibi olmasını sağlar.
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
              title="Decidehub ile çatışma olmadan yönetin"
              text="Decidehub ile her meclis üyesi diğer grup üyelerinden topladığı güvene oranla farklı karar verme güçlerine sahip olur fakat Decidehub bu farkı gizli tutarak bunun üyeler arasında bir ego çatışmasına yol açmasını engeller. Decidehub’da tüm üyelerin karar verme güçlerinin toplamının 100 ettiği bilinse de bu gücün her üyeye ayrı ayrı nasıl dağıldığını KİMSE bilemez. Alınan her kararda meclis üyeleri oylarını kullanırken Decidehub içinde gizli tutulan yetkilerini kullanırlar ama kendileri dahi alınan karardaki etkilerinin gücünü bilemezler. Bu da meclisin ahenk içinde çalışmasını, her üyenin sözünün dinlenmesini sağlar.
              Bu daha önce benzeri görülmemiş yepyeni bir yönetim biçimidir."
              logo={PersonLogo}
            />
          </div>
          <div className="static-two text-gray-dark flex flex-col justify-center">
            <InfoContainerLeft
              title="Decidehub ile itaat edilmeye değer yönetmelikler yazın"
              text="Decidehub’ı grubunuzun nasıl işleyeceğini tanımlayan yönetmeliği oluşturmak için kullanabilirsiniz. Yönetmeliğinizde yapılan her eklenti ya da değişiklik oluşturduğunuz meclis tarafından onaylanarak oluşturulur.
              İnsanlar kendilerinin de şekillendirdiği yönetmelikleri daha iyi anlar ve daha çok itaat ederler. Decidehub ile kurallara bağlılık artar, önemli kuralların mutlaka yazılı olması yönündeki eğilim artar."
              logo={PolicyLogo}
            />
          </div>
          <div
            className="static-one text-white flex justify-center flex-col"
            id="about-us">
            <InfoContainerRight
              title="Decidehub ile patronluk bitsin liderlik başlasın"
              text="Decidehub’ı gruptaki yöneticileri belirlemek için kullanabilirsiniz. Meclis tarafından seçilen yöneticiler gruptan daha yüksek itaat görecektir. Bu da kararların daha başarı ile uygulanmasını sağlayacaktır."
              logo={ManagerLogo}
            />
          </div>
          <div className="static-two text-gray-dark flex flex-col justify-center">
            <InfoContainerLeft
              title="Decidehub ile parayı daha kolay paylaşın"
              text="Paylaşımlarda itiraz oluşmasını engellemenin yolu paylaşım kararında herkesin sözünün dinlenmesidir. Decidehub herkesin sözünün dinlendiği ama eşit dinlenmediği bir ara formül sunmaktadır. Herkesin sözünü ona olan güven seviyesinde sonuca katan Decidehub algoritması grup vicdanına en uygun paylaşım kararlarının verilmesinde de size yardımcı olacaktır."
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

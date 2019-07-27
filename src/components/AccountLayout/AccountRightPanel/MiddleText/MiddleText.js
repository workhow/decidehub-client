import React from "react";
import "./MiddleText.css";

const sloganTr = ["Grubun için yönetmelik oluştur.", "Zaman kaybetmemek için yönetici seç.", "Burada gruplar demokratik ve kalıcı kararlar alır."];

class MiddleText extends React.Component {
    chooseRandom = () => {return Math.floor(Math.random()*sloganTr.length)}

    render() {
        const chosenText = sloganTr[this.chooseRandom()];
        return <div className="text-white text-5xl w-3/4 m-auto flex justify-center"><p className="slogan font-light"> {chosenText} </p></div>
    }
}

export default MiddleText;
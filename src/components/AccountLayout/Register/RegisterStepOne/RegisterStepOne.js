import React from "react";
import "./RegisterStepOne.css";
import image from "./manager.svg";
import TeamNameForm from "./TeamNameForm/TeamNameForm";

class RegisterStepOne extends React.Component {
    render() {
        return (
            <div className="h-full">
                <p className="text-2xl mb-20 mt-5 text-gray-dark bg-white font-light">
                    Hesap Oluştur
                </p>
                <img src={image} alt="manager" className="m-auto mb-10"/>
                <p className="text-center text-sm mb-10 mx-5 text-gray-dark">
                    Her Grubu yanlızca bir yönetici oluşturur. Diğer üyeleri davet eder takımı
                    sizden başka birinin yaratmadığından emin olun.
                </p>
                <div>
                    <TeamNameForm setFormData={this.props.setFormData}/>
                </div>
            </div>
        );
    }
}

export default RegisterStepOne;

import React, {Component} from 'react'; 
import TextArea from "../../../AccountLayout/Register/TextArea/TextArea";
import Button from "../../../AccountLayout/Register/Button/Button";

class ChangePolicyModal extends Component {
    render() {
        return (
            <div className="flex flex-col px-3 mt-8">
                <p className="text-2xl mb-16 mt-4 text-gray-dark">Yönetmelik Değişikliği Öner</p>
                <div>
                    <TextArea
                        className="text-base text-gray-dark"
                        labelText="Bu değişikliği neden yaptığını üyelere açıklar mısın?"
                        placeholderText="Uygulama lisans ücretlerinin gereğinden fazla artması sebebiyle proje yöneticileri için emsal programlar araştırdık."/>
                </div>
                <div className="w-1/3 mt-12">
                    <Button text="Devam Et" onClick={this.props.toggleDrawer('congratspolicymodal', 'right', true)}/>
                </div>
            </div>
        )
    }
}

export default ChangePolicyModal;
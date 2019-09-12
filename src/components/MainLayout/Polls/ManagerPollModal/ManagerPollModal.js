import React, {Component} from 'react';
import FormBlock from "../../../AccountLayout/Register/FormBlock/FormBlock";
import TextArea from "../../../AccountLayout/Register/TextArea/TextArea";
import Button from "../../../AccountLayout/Register/Button/Button";

class ManagerPollModal extends Component {
    render() {
        return (
            <div className="flex flex-col px-3 mt-8">
                <p className="text-2xl mb-16 mt-4 text-gray-dark">Yönetici seçimi başlat</p>
                <div className="mb-8">
                    <FormBlock
                        className="text-base text-gray-dark"
                        labelText="Başlık"
                        placeholderText=""/>
                </div>
                <div className="mb-8 ">
                    <TextArea
                        className="text-base text-gray-dark"
                        labelText="Açıklama"
                        placeholderText=""/>
                </div>
                <div className="mb-8">
                    <FormBlock
                        className="text-base text-gray-dark"
                        labelText="1. Seçenek"
                        placeholderText="Ad Soyad"/>
                </div>
                <div className="mb-8">
                    <FormBlock
                        className="text-base text-gray-dark"
                        labelText="2. Seçenek"
                        placeholderText="Ad Soyad"/>
                </div>
                <div className="w-1/3 mt-4">
                    <Button
                        text="Devam Et" onClick={this.props.toggleDrawer('congratsmanagermodal', 'right', true)}/>
                </div>
            </div>
        )
    }
}

export default ManagerPollModal;
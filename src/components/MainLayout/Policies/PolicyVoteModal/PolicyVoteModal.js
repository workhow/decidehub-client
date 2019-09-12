import React, {Component} from 'react';
import Button from "../../../AccountLayout/Register/Button/Button";
import StatusIndicator from "../../../SetupLayout/StatusIndicator/StatusIndicator";
import SubHeader from "../../Settings/SubHeader/SubHeader";
import Checkbox from "../../Polls/ManagerVoteModal/Checkbox/Checkbox";

class PolicyVoteModal extends Component {
    render() {
        return (
            <div className="flex flex-col mt-8">
                <div className="flex flex-row justify-between mb-8">
                    <p className="text-2xl text-gray-dark w-1/2 align-left">Yönetmelik Değişikliği</p>
                    <StatusIndicator color="blue" text="Başlıyor (14dk)"/>
                </div>
                <div className="flex flex-row mb-8 justify-between">
                    <SubHeader text="Değiştirilen / Eklenen madde sayısı"/>
                    <p className="text-gray-dark text-base w-2/3 text-left">4</p>
                </div>
                <div className="flex flex-row mb-8 justify-between">
                    <SubHeader text="Sonlanma Tarihi"/>
                    <p className="text-gray-dark text-base w-2/3 text-left">23 Tem 2018</p>
                </div>
                <div className="flex flex-row mb-8 justify-between">
                    <SubHeader text="Değiştirme Sebebi"/>
                    <p className="text-gray-dark text-base w-2/3 text-left">İk sorumlusunun görev kapsamının genişletilmesi.</p>
                </div>
                <div className="flex flex-row mb-8 justify-between">
                    <SubHeader text="Değişen Yönetmelik"/>
                    <p className="text-gray-dark text-base w-2/3 text-left">Değişiklikleri Görüntüle</p>
                </div>
                <Checkbox text="Kabul" className="bg-gray-light"/>
                <Checkbox text="Red"/>
                <div className="flex flex-col w-1/2 mt-24">
                    <Button
                        text="Devam Et"
                        onClick={this
                        .props
                        .openModal("Tebrikler! Harika!", "Oyunu kullandın.")}/>
                </div>
            </div>
        )
    }
}

export default PolicyVoteModal;
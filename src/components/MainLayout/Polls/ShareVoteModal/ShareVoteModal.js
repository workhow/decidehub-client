import React, {Component} from 'react';
import Button from "../../../AccountLayout/Register/Button/Button";
import VoteRange from "../AuthVoteModal/VoteRange/VoteRange";
import StatusIndicator from "../../../SetupLayout/StatusIndicator/StatusIndicator";
import SubHeader from "../../Settings/SubHeader/SubHeader";

class ShareVoteModal extends Component {
    render() {
        return (
            <div className="flex flex-col mt-8">
                <div className="flex flex-row justify-between mb-8">
                    <p className="text-2xl text-gray-dark w-1/2 align-left">Prim Dağıtımı</p>
                    <StatusIndicator color="blue" text="Başlıyor (14dk)"/>
                </div>
                <div className="flex flex-row mb-8 justify-between">
                    <SubHeader text="Sonlanma Tarihi"/> 
                    <p className="text-gray-dark text-base w-2/3 text-left">23 Tem 2018</p>
                </div>
                <div className="flex flex-row mb-24 justify-between">
                    <SubHeader text="Açıklama"/> 
                    <p className="text-gray-dark text-base w-2/3 text-left">Firma kazançlarının harcanması hususunda oranları belirlemek için yapılan oylama.</p>
                </div>
                <VoteRange name="Erdem Tonyalı"/>
                <VoteRange name="Çağakan Bağcı"/>
                <VoteRange name="Kadir Köymen"/>
                <div className="flex flex-col w-1/2 mt-24">
                    <Button text="Devam Et"/>
                </div>
            </div>
        )
    }
}

export default ShareVoteModal;
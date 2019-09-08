import React, {Component} from 'react';
import Button from "../../../AccountLayout/Register/Button/Button";
import VoteRange from "./VoteRange/VoteRange";
import StatusIndicator from "../../../SetupLayout/StatusIndicator/StatusIndicator";
import SubHeader from "../../Settings/SubHeader/SubHeader";

class AuthVoteModal extends Component {
    render() {
        return (
            <div className="flex flex-col mt-8">
                <div className="flex flex-row justify-between mb-8">
                    <p className="text-2xl text-gray-dark w-1/2 align-left">Yetki Dağılımı Oylaması</p>
                    <StatusIndicator color="blue" text="Başlıyor (14dk)"/>
                </div>
                <div className="flex flex-row mb-24">
                    <SubHeader text="Sonlanma Tarihi"/> 
                    <p className="text-gray-dark text-base ml-16">23 Tem 2018</p>
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

export default AuthVoteModal;
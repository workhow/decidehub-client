import React, {Component} from 'react';
import SubHeader from '../../../MainLayout/Settings/SubHeader/SubHeader';
import './History.css';

class History extends Component {
    render() {
        return (
            <div className="fixed top-0 bottom-0 right-0">
                <div className="bg-gray-dark text-white py-4 px-8">
                    <p className="text-lg">Geçmiş</p>
                </div>
                <div className="flex flex-col p-2 bg-white h-screen">
                    <div className="w-full p-5">
                        <p className="text-gray-dark text-sm">12 Tem 14:45</p>
                        <SubHeader text="Çağakan Bağcı"/>
                    </div>
                    <div className="history-bg w-full p-5 rounded-lg">
                        <p className="text-gray-dark text-sm">6 Tem 14:45</p>
                        <SubHeader text="Atakan Ağcı"/>
                    </div>
                    <div className="w-full p-5">
                        <p className="text-gray-dark text-sm">Kurulum Oylaması</p>
                        <SubHeader text="Decidehub"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default History

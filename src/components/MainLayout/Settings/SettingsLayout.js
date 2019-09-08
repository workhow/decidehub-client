import React from "react";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import StatusIndicator from "../../SetupLayout/StatusIndicator/StatusIndicator";
import NotificationLogo from "./bildirim.svg";
import LogoutLogo from "./cikis.svg";
import FormPlusMinus from "./FormPlusMinus/FormPlusMinus";
import Button from "./../../AccountLayout/Register/Button/Button";
import Header from "./Header/Header";
import Options from "../Users/menu.svg";
import SettingsCard from "./SettingsCard/SettingsCard";
import FormBlock from "../../AccountLayout/Register/FormBlock/FormBlock";
import "./SettingsLayout.css";

class SettingsLayout extends React.Component {
    render() {
        return <div>
            <LeftNavbar/>
            <div className="ml-24">
                <div className="flex flex-row justify-end pt-12 status-bar text-sm">
                    <div>
                        <StatusIndicator
                            text="Yetki Dağılımı Oylaması (9 Gün sonra)"
                            color="decidehub"/>
                    </div>
                    <div className="flex flex-row items-center mr-10">
                        <a href="!#"><img src={NotificationLogo} alt="notification logo"/></a>
                        <a href="!#"><img src={LogoutLogo} alt="logout logo" className="ml-10"/></a>
                    </div>
                </div>
                <div className="w-2/3 m-auto mt-12">
                    <Header text="Oylama Ayarları"/>
                </div>
                <div className="mt-6">
                    <SettingsCard>
                        <div className="flex flex-col w-1/3 p-5 text-gray-text">
                            <p className="h-16">Oyların geçerli sayılabilmesi için gerekli minimum katılım oranı</p>
                            <FormPlusMinus placeholderText="%50"/>
                        </div>
                        <div className="flex flex-col w-1/3 p-5 text-gray-text">
                            <p className="h-16">Yetki dağılımı oylaması için tekrarlama sıklığı</p>
                            <FormPlusMinus placeholderText="30 Gün"/>
                        </div>
                        <div className="flex flex-col w-1/3 p-5 text-gray-text">
                            <p className="h-16">Oylama Süresi</p>
                            <FormPlusMinus placeholderText="1 Saat"/>
                        </div>
                    </SettingsCard>
                </div>
                <div className="w-2/3 m-auto mt-12">
                    <Header text="Bildirim Ayarları"/>
                </div>
                <div
                    className='flex flex-row justify-between content-center bg-white items-baseline px-5 py-2 border border-gray-light border-b-0 w-2/3 m-auto mt-6 text-sm'>
                    <p className="p-5 text-gray-dark">Oylamalardan mail ile haberdar et</p>
                    <input type="checkbox" className="mr-10"/>
                </div>
                <div
                    className='flex flex-row justify-between content-center bg-white items-baseline px-5 py-2 border border-gray-light border-b-0 w-2/3 m-auto text-sm'>
                    <p className="p-5 text-gray-dark">Haftalık aktivite e-postası gönder</p>
                    <input type="checkbox" className="mr-10"/>
                </div>
                <div
                    className='flex flex-row justify-between content-center bg-white items-baseline px-5 py-2 border border-gray-light border-b-0 w-2/3 m-auto text-sm'>
                    <p className="p-5 text-gray-dark">Chrome bildirimlerini aktif et</p>
                    <input type="checkbox" className="mr-10"/>
                </div>
                <div className="w-2/3 m-auto mt-12">
                    <Header text="Kişisel Ayarlar"/>
                </div>
                <div
                    className='flex flex-row justify-between content-center items-center w-2/3 m-auto mt-6 text-sm'>
                    <div
                        className="flex flex-col justify-center bg-white border border-gray-light w-1/3 h-64 mr-8">
                        <img
                            src={Options}
                            alt="options logo"
                            className="self-start ml-auto mb-auto pt-5 h-12 pr-5"/>
                        <input type="file" className="m-auto p-5"></input>
                    </div>
                    <div className="border border-gray-light bg-white w-2/3 p-10 h-64">
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-5 mb-5">
                                <FormBlock labelText="Adı"/>
                            </div>
                            <div className="w-1/2 mb-5">
                                <FormBlock labelText="Soyadı"/>
                            </div>
                        </div>
                        <FormBlock placeholderText="example@decidehub.com" labelText="E-mail"/>
                    </div>
                </div>
                <div className="w-2/3 m-auto mt-12">
                    <Header text="Ödeme Yöntemlerim"/>
                </div>
                <div
                    className='flex flex-row justify-between content-center bg-white items-center px-5 py-2 border border-gray-light w-2/3 m-auto mt-6 text-sm'>
                    <p className="p-5 text-gray-dark">Mastercard - 7059</p>
                    <img src={Options} alt="options logo"/>
                </div>
                <div className="w-2/3 m-auto mt-12">
                    <Header text="Aboneliklerim"/>
                </div>
                <div
                    className='flex flex-row justify-between content-center bg-white items-center px-5 py-2 border border-gray-light w-2/3 m-auto mt-6 text-sm'>
                    <div className="flex flex-row mr-12">
                        <p className="p-5 text-gray-dark mr-8">Decidehub Team Üyeliği (14 Üye)</p>
                        <p className="p-5 text-gray-text">$14,99 /Ay</p>
                    </div>
                    <div className="flex flex-row ">
                        <p className="p-5 text-gray-text mr-8">18 Ara 2018 tarihinde yenilenir</p>
                        <img src={Options} alt="options logo"/>
                    </div>

                </div>
                <div className="w-1/6 ml-auto save-button mt-12">
                    <Button text="Kaydet"/>
                </div>

            </div>
        </div>
    }
}

export default SettingsLayout;
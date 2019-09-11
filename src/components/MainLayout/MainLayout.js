import React from "react";
import LeftNavbar from "./LeftNavbar/LeftNavbar";
import StatusIndicator from "../SetupLayout/StatusIndicator/StatusIndicator";
import NotificationLogo from "./Settings/bildirim.svg";
import LogoutLogo from "./Settings/cikis.svg";
import Header from "./Settings/Header/Header";
import SubHeader from "./Settings/SubHeader/SubHeader";
import PollCard from "./Polls/PollCard/PollCard";
import PolicyLogo from "./yonetmelik.svg";
import InfoLogo from "./info.svg";
import PuzzleLogo from "./paylasim.svg";
import ManagerLogo from "./yonetici.svg";
import AuthorithyLogoOne from "./yetki.svg";
import AuthorithyLogoTwo from "./yetki2.svg";
import DrawerModal from "./DrawerModal/DrawerModal";
import {Link} from "react-router-dom";
import FinalCongratsModal from "./Polls/FinalCongratsModal/FinalCongratsModal";
import Notifications from "./Notifications/Notifications";

export default function MainLayout() {

    const [state,
        setState] = React.useState({right: false, modalType: "", modalTitle: "", modalText: "", modalOpen: false});

    const toggleDrawer = (modalType, side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({
            ...state,
            [side]: open,
            modalType: modalType
        });
    };

    const openModal = (modalTitle, modalText) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({
            ...state,
            modalTitle: modalTitle,
            modalText: modalText,
            modalOpen: true,
            right: false
        });

    }
    const closeModal = () => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({
            ...state,
            modalOpen: false
        });

    }

    const [anchorEl,
        setAnchorEl] = React.useState(null);

    function handleNotificationClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleNotificationClose() {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open
        ? 'simple-popover'
        : undefined;

    return <div className="pb-64">
        <LeftNavbar/>
        <div className="ml-24">
            <div className="flex flex-row justify-end pt-12 status-bar text-sm">
                <div>
                    <StatusIndicator
                        text="Yetki Dağılımı Oylaması (9 Gün sonra)"
                        color="decidehub"/>
                </div>
                <div className="flex flex-row items-center mr-10">
                    <div
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleNotificationClick}><img src={NotificationLogo} alt="notification logo"/></div>
                    <a href="!#"><img src={LogoutLogo} alt="logout logo" className="ml-10"/></a>
                </div>
            </div>
            <div className="m-auto w-2/3 mt-16 text-sm">
                <Header text="Oylama Başlat"/>
                <div
                    className="flex flex-row w-full bg-white border border-gray-light py-1 h-32 mt-8"
                    onClick={toggleDrawer('authpollmodal', 'right', true)}>
                    <div className="flex items-center w-1/12">
                        <img src={AuthorithyLogoTwo} alt="puzzle logo" className="w-16 mx-5"/>
                    </div>
                    <div className="flex flex-col w-11/12 items-left justify-center">
                        <div className="ml-5">
                            <Header text="Yetki Dağılımı Oylaması"/>
                        </div>
                        <div className="ml-5">
                            <SubHeader
                                text="Oylamalardaki birim güç oranlarını belirlemek için belirli periyotlarla yenilenen oylamadır."/>
                        </div>
                    </div>
                    <div>
                        <img src={InfoLogo} alt="question mark" className="ml-auto mr-5 mt-5"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row m-auto w-2/3 mt-8 text-sm">
                <Link
                    to="/policy"
                    className="flex flex-col bg-white border border-gray-light w-1/2 h-64 mr-8">
                    <img src={InfoLogo} alt="question mark" className="ml-auto mr-5 mt-5"/>
                    <div className="w-3/5">
                        <img src={PolicyLogo} alt="Policy Logo" className="w-16 mx-5"/>
                        <div className="mx-5 mt-12">
                            <Header text="Yönetmelik"/>
                        </div>
                        <div className="mx-5">
                            <SubHeader text="Yönetmeliği düzenleyin"/>
                        </div>
                    </div>
                </Link>
                <div className="flex flex-col justify-between w-1/2 h-64">
                    <div
                        className="flex flex-row bg-white border border-gray-light py-1"
                        onClick={toggleDrawer('sharepollmodal', 'right', true)}>
                        <div className="pl-8 pb-5 w-1/5 ">
                            <img src={PuzzleLogo} alt="puzzle logo" className="ml-auto mr-5 mt-5"/>
                        </div>
                        <div className="flex flex-col w-4/5 items-left justify-center">
                            <div className="ml-5">
                                <Header text="Paylaşım Oylaması"/>
                            </div>
                            <div className="ml-5">
                                <SubHeader text="Gelir,mal,hak paylaşımı için oylama başlatın"/>
                            </div>
                        </div>
                        <div>
                            <img src={InfoLogo} alt="question mark" className="ml-auto mr-5 mt-5"/>
                        </div>
                    </div>
                    <div
                        className="flex flex-row bg-white border border-gray-light py-1"
                        onClick={toggleDrawer('managerpollmodal', 'right', true)}>
                        <div className="pl-8 pb-5 w-1/5">
                            <img src={ManagerLogo} alt="manager logo" className="ml-auto mr-5 mt-5"/>
                        </div>
                        <div className="flex flex-col w-4/5 items-left justify-center">
                            <div className="mx-5">
                                <Header text="Yönetici Seç"/>
                            </div>
                            <div className="mx-5">
                                <SubHeader text="Belirli bir görev için lider seçin"/>
                            </div>
                        </div>
                        <div>
                            <img src={InfoLogo} alt="question mark" className="ml-auto mr-5 mt-5"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 m-auto mt-12 mb-6">
                <Header text="Oylamalar"/>
            </div>
            <PollCard
                logo={AuthorithyLogoOne}
                pollName="2. Yetki Dağılımı Oylaması"
                pollEndDate="23 Tem 2018"
                statusText="Başlıyor.. "
                statusColor="blue"/>
            <PollCard
                logo={PuzzleLogo}
                pollName="2. Yetki Dağılımı Oylaması"
                pollEndDate="23 Tem 2018"
                statusText="Tamamlandı "
                statusColor="red"/>
        </div>

        <DrawerModal
            type={state.modalType}
            right={state.right}
            toggleDrawer={toggleDrawer}
            openModal={openModal}/>

        <FinalCongratsModal
            open={state.modalOpen}
            title={state.modalTitle}
            text={state.modalText}
            closeModal={closeModal}/>

        <Notifications
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleNotificationClose}/>
    </div>

}

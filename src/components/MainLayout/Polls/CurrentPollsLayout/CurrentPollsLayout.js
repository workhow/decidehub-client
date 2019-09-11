import React from "react";
import LeftNavbar from "../../LeftNavbar/LeftNavbar";
import NotificationLogo from "../../Settings/bildirim.svg";
import LogoutLogo from "../../Settings/cikis.svg";
import Header from "../../Settings/Header/Header";
import PollCard from "../../Polls/PollCard/PollCard";
import PuzzleLogo from "../../paylasim.svg";
import AuthorithyLogoOne from "../../yetki.svg";
import PolicyLogo from "../../yonetmelik.svg";
import ManagerLogo from "../../yonetici.svg";
import Notifications from "../../Notifications/Notifications";

export default function CurrentPollsLayout() {

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
                <div className="flex flex-row items-center mr-10">
                    <div
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleNotificationClick}><img src={NotificationLogo} alt="notification logo"/></div>
                    <a href="!#"><img src={LogoutLogo} alt="logout logo" className="ml-10"/></a>
                </div>
            </div>
            <div className="w-2/3 m-auto mt-32 mb-6">
                <Header text="Oylamalar"/>
            </div>
            <PollCard
                logo={PolicyLogo}
                pollName="12 Tem Yönetmelik Değişikliği"
                pollEndDate="23 Tem 2018"
                statusText="Devam ediyor "
                statusColor="orange"/>
            <PollCard
                logo={ManagerLogo}
                pollName="Brand Manager Seçimi"
                pollEndDate="23 Tem 2018"
                statusText="Devam ediyor "
                statusColor="orange"/>
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

        <Notifications
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleNotificationClose}/>
    </div>

}

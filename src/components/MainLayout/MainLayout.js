import React from "react";
import SetupTopBanner from "../SetupLayout/SetupTopBanner/SetupTopBanner"
import SetupUserInviteCard from "../SetupLayout/SetupUserInviteCard/SetupUserInviteCard"

class MainLayout extends React.Component {
    render () {
        return <div>
            <SetupTopBanner text="Hoşgeldin! Decidehub deneyimi için diğer kullanıcıları davet etmelisin." subText="En az 3 kişi eklemelisin."/>
            <SetupUserInviteCard />
        </div>
    }
}

export default MainLayout;
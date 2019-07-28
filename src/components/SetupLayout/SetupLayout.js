import React from "react";
import SetupTopBanner from "../SetupLayout/SetupTopBanner/SetupTopBanner";
import SetupUserInviteCard from "../SetupLayout/SetupUserInviteCard/SetupUserInviteCard";

class SetupLayout extends React.Component {
    render () {
        return <div>
            <SetupTopBanner />
            <SetupUserInviteCard />
        </div>
    }
}

export default SetupLayout;
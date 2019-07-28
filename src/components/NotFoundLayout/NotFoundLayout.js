import React from "react";
import SetupTopBanner from "../SetupLayout/SetupTopBanner/SetupTopBanner"
import SetupUserInviteCard from "../SetupLayout/SetupUserInviteCard/SetupUserInviteCard"

class NotFoundLayout extends React.Component {
    render () {
        return <div>
            <SetupTopBanner />
            <SetupUserInviteCard />
        </div>
    }
}

export default NotFoundLayout;
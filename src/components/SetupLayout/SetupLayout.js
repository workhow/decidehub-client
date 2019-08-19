import React, {Fragment} from 'react';
import SetupTopBanner from "../SetupLayout/SetupTopBanner/SetupTopBanner";
import SetupUserInviteCard from "../SetupLayout/SetupUserInviteCard/SetupUserInviteCard";
import ProfilePicture from "../AccountLayout/Register/RegisterStepOne/manager.svg";
import InviteNewUser from "./InviteNewUser/InviteNewUser";
import Button from "../AccountLayout/Register/Button/Button";
import "./SetupLayout.css";

class SetupLayout extends React.Component {
    render() {
        return <Fragment>
            <SetupTopBanner
                text="Hoşgeldin! Decidehub deneyimi için diğer kullanıcıları davet etmelisin."
                subtext="En az 3 kişi eklemelisin."/>
            <SetupUserInviteCard
                img={ProfilePicture}
                name="Cagakan Bagci(me)"
                email="cagakan@creathive.co"/>
            <SetupUserInviteCard
                img={ProfilePicture}
                name="Sencer Yilmaz"
                email="sencer@creathive.co"/>
            <InviteNewUser text="Yeni Ekle" />
            <div className="w-2/12 float-right continue-button">
                <Button text="DEVAM ET"/>
            </div>
        </Fragment>
    }
}

export default SetupLayout;
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CloseLogo from "../Users/kapat.svg";
import AuthPollModal from "../Polls/AuthPollModal/AuthPollModal";
import ManagerPollModal from "../Polls/ManagerPollModal/ManagerPollModal";
import ManagerVoteModal from "../Polls/ManagerVoteModal/ManagerVoteModal";
import SharePollModal from "../Polls/SharePollModal/SharePollModal";
import ShareVoteModal from "../Polls/ShareVoteModal/ShareVoteModal";
import CongratsAuthModal from "../Polls/CongratsAuthModal/CongratsAuthModal";
import AuthVoteModal from "../Polls/AuthVoteModal/AuthVoteModal";
import CongratsShareModal from "../Polls/CongratsShareModal/CongratsShareModal";
import CongratsManagerModal from "../Polls/CongratsManagerModal/CongratsManagerModal";
import ChangePolicyModal from "../Policies/ChangePolicyModal/ChangePolicyModal";
import CongratsPolicyModal from "../Policies/CongratsPolicyModal/CongratsPolicyModal";
import PolicyVoteModal from "../Policies/PolicyVoteModal/PolicyVoteModal";
import PollResultModal from "../Polls/PollResultModal/PollResultModal";
import FirstSharePollModal from "../Polls/FirstSharePollModal/FirstSharePollModal";
import FirstManagerPollModal from "../Polls/FirstManagerPollModal/FirstManagerPollModal";
import FirstPolicyModal from "../Policies/FirstPolicyModal/FirstPolicyModal";

export default function DrawerModal(props) {
  const renderSwitch = () => {
    switch (props.type) {
      case "authpollmodal":
        return (
          <AuthPollModal
            refreshData={props.refreshData}
            toggleDrawer={props.toggleDrawer}
          />
        );

      case "managerpollmodal":
        return (
          <ManagerPollModal
            refreshData={props.refreshData}
            toggleDrawer={props.toggleDrawer}
          />
        );

      case "managervotemodal":
        return (
          <ManagerVoteModal
            toggleDrawer={props.toggleDrawer}
            refreshData={props.refreshData}
            openModal={props.openModal}
            closeModal={props.closeModal}
            type={props.type}
            poll={props.poll}
          />
        );

      case "sharepollmodal":
        return (
          <SharePollModal
            refreshData={props.refreshData}
            toggleDrawer={props.toggleDrawer}
          />
        );
      
      case "firstsharepollmodal":
        return (
          <FirstSharePollModal toggleDrawer={props.toggleDrawer}/>
        );

      case "firstmanagerpollmodal":
        return (
          <FirstManagerPollModal toggleDrawer={props.toggleDrawer}/>
        );
      
      case "firstpolicymodal":
        return (
          <FirstPolicyModal toggleDrawer={props.toggleDrawer}/>
        );

      case "sharevotemodal":
        return (
          <ShareVoteModal
            toggleDrawer={props.toggleDrawer}
            refreshData={props.refreshData}
            openModal={props.openModal}
            closeModal={props.closeModal}
            poll={props.poll}
          />
        );

      case "congratsauthmodal":
        return <CongratsAuthModal toggleDrawer={props.toggleDrawer} />;

      case "congratssharemodal":
        return <CongratsShareModal toggleDrawer={props.toggleDrawer} />;

      case "congratsmanagermodal":
        return <CongratsManagerModal toggleDrawer={props.toggleDrawer} />;

      case "authvotemodal":
        return (
          <AuthVoteModal
            refreshData={props.refreshData}
            openModal={props.openModal}
            closeModal={props.closeModal}
            poll={props.poll}
          />
        );

      case "changepolicymodal":
        return (
          <ChangePolicyModal
            draftBody={props.draftBody}
            refreshData={props.refreshData}
            toggleDrawer={props.toggleDrawer}
          />
        );

      case "congratspolicymodal":
        return <CongratsPolicyModal toggleDrawer={props.toggleDrawer} />;

      case "policyvotemodal":
        return (
          <PolicyVoteModal
            refreshData={props.refreshData}
            openModal={props.openModal}
            closeModal={props.closeModal}
            poll={props.poll}
          />
        );
      case "pollresultmodal":
        return (
          <PollResultModal
            toggleDrawer={props.toggleDrawer}
            poll={props.poll}
          />
        );

      default:
        break;
    }
  };

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.right}
        onClose={props.toggleDrawer(props.type, "right", false)}>
        <div className="m-4 md:m-8 lg:m-12 mb-6 bg-white">
          <img
            src={CloseLogo}
            alt="cross logo for closing the modal"
            onClick={props.toggleDrawer(props.type, "right", false)}
            className="flex flex row ml-auto cursor-pointer"
          />{" "}
          {renderSwitch()}
        </div>
      </Drawer>
    </div>
  );
}

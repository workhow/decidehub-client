import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CloseLogo from '../Users/kapat.svg';
import AuthPollModal from '../Polls/AuthPollModal/AuthPollModal';
import ManagerPollModal from '../Polls/ManagerPollModal/ManagerPollModal';
import ManagerVoteModal from '../Polls/ManagerVoteModal/ManagerVoteModal';
import SharePollModal from '../Polls/SharePollModal/SharePollModal';
import ShareVoteModal from '../Polls/ShareVoteModal/ShareVoteModal';
import CongratsAuthModal from '../Polls/CongratsAuthModal/CongratsAuthModal';
import AuthVoteModal from '../Polls/AuthVoteModal/AuthVoteModal';
import CongratsShareModal from '../Polls/CongratsShareModal/CongratsShareModal';
import CongratsManagerModal from '../Polls/CongratsManagerModal/CongratsManagerModal';

export default function DrawerModal(props) {

    const renderSwitch = () => {
        switch (props.type) {
            case 'authpollmodal':
                return <AuthPollModal toggleDrawer={props.toggleDrawer}/>;

            case 'managerpollmodal':
                return <ManagerPollModal toggleDrawer={props.toggleDrawer}/>;

            case 'managervotemodal':
                return <ManagerVoteModal toggleDrawer={props.toggleDrawer} openModal={props.openModal} closeModal={props.closeModal} type={props.type}/>;

            case 'sharepollmodal':
                return <SharePollModal toggleDrawer={props.toggleDrawer}/>;

            case 'sharevotemodal':
                return <ShareVoteModal toggleDrawer={props.toggleDrawer} openModal={props.openModal} closeModal={props.closeModal}/>;

            case 'congratsauthmodal':
                return <CongratsAuthModal toggleDrawer={props.toggleDrawer}/>;

            case 'congratssharemodal':
                return <CongratsShareModal toggleDrawer={props.toggleDrawer}/>;

            case 'congratsmanagermodal':
                return <CongratsManagerModal toggleDrawer={props.toggleDrawer}/>;

            case 'authvotemodal':
                return <AuthVoteModal openModal={props.openModal} closeModal={props.closeModal}/>;

            default:
                break;
        }
    };

    return (

        <div>
            <Drawer
                anchor="right"
                open={props.right}
                onClose={props.toggleDrawer(props.type, 'right', false)}>
                <div className="m-4 md:m-12 lg:m-16 mb-6 bg-white">
                    <img
                        src={CloseLogo}
                        alt="cross logo for closing the modal"
                        onClick={props.toggleDrawer(props.type, 'right', false)}
                        className="flex flex row ml-auto cursor-pointer"/> {renderSwitch()}
                </div>
            </Drawer>
        </div>
    )
};
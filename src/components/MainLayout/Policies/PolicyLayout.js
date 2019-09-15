import React from "react";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import NotificationLogo from "../Settings/bildirim.svg";
import LogoutLogo from "../Settings/cikis.svg";
import Header from "../Settings/Header/Header";
import Notifications from "../Notifications/Notifications";
import TextEditor from "./TextEditor/TextEditor";
import History from "./History/History";
import Button from "../../AccountLayout/Register/Button/Button";
import DrawerModal from "../DrawerModal/DrawerModal";
import FinalCongratsModal from "../Polls/FinalCongratsModal/FinalCongratsModal";

export default function PolicyLayout() {
  const [state, setState] = React.useState({
    right: false,
    modalType: "",
    modalTitle: "",
    modalText: "",
    modalOpen: false
  });

  const toggleDrawer = (modalType, side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({
      ...state,
      [side]: open,
      modalType: modalType
    });
  };

  const openModal = (modalTitle, modalText) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({
      ...state,
      modalTitle: modalTitle,
      modalText: modalText,
      modalOpen: true,
      right: false
    });
  };
  const closeModal = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({
      ...state,
      modalOpen: false
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleNotificationClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleNotificationClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <LeftNavbar />
      <div className="flex flex-row">
        <div className="ml-24 w-4/5">
          <div className="flex flex-row justify-end pt-12 mr-32 ml-8 text-sm">
            <div className="flex flex-row items-center">
              <div
                aria-describedby={id}
                variant="contained"
                onClick={handleNotificationClick}>
                <img src={NotificationLogo} alt="notification logo" />
              </div>
              <a href="/home">
                <img src={LogoutLogo} alt="logout logo" className="ml-10" />
              </a>
            </div>
          </div>
          <div className="w-4/5 m-auto ">
            <Header text="Yönetmelik" />
            <div className="mt-8">
              <TextEditor />
            </div>
            <div className="w-1/6 ml-auto py-4">
              <Button
                text="Oylamayı başlat"
                onClick={toggleDrawer("changepolicymodal", "right", true)}
              />
            </div>
          </div>
        </div>
        <div className="justify-end">
          <History />
        </div>
      </div>
      <Notifications
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleNotificationClose}
      />

      <DrawerModal
        type={state.modalType}
        right={state.right}
        toggleDrawer={toggleDrawer}
        openModal={openModal}
      />

      <FinalCongratsModal
        open={state.modalOpen}
        title={state.modalTitle}
        text={state.modalText}
        closeModal={closeModal}
      />
    </div>
  );
}

import React from "react";
import axios from "axios";
import Util from "../../../util";
import Loader from "../../Loader/Loader";
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

export class PolicyLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      editing: false,
      modalType: "",
      modalTitle: "",
      modalText: "",
      modalOpen: false,
      anchorEl: null,
      currentPolicy: null,
      draftBody: ""
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.editClicked = this.editClicked.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    this.getCurrentPolicy();
    this.getPolicyHistory();
  }

  editClicked() {
    this.setState({
      ...this.state,
      editing: true,
      draftBody: this.state.currentPolicy.body
    });
  }

  textChanged(newText) {
    this.setState({ draftBody: newText });
  }

  getCurrentPolicy() {
    const currentPolicyPath = Util.pathForCurrentSubdomain("policy");

    axios
      .get(currentPolicyPath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        this.setState({
          currentPolicy: response.data,
          editing: response.data.id === 0,
          editable: true
        });
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
          this.setState({
            ...this.state
          });
        }
      });
  }

  getPolicyHistory() {
    const historyPath = Util.pathForCurrentSubdomain("policy/history");

    axios
      .get(historyPath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        this.setState({
          policyHistory: response.data
        });
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
          this.setState({
            ...this.state
          });
        }
      });
  }

  toggleDrawer = (modalType, side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      ...this.state,
      [side]: open,
      modalType: modalType
    });
  };

  openModal = (modalTitle, modalText) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      ...this.state,
      modalTitle: modalTitle,
      modalText: modalText,
      modalOpen: true,
      right: false
    });
  };

  closeModal = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      ...this.state,
      modalOpen: false
    });
  };

  handleNotificationClick(event) {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget
    });
  }

  handleNotificationClose() {
    this.setState({
      ...this.state,
      anchorEl: null
    });
  }

  render() {
    if (!this.state.currentPolicy) {
      return <Loader />;
    }
    return (
      <div>
        <LeftNavbar />
        <div className="flex flex-row">
          <div className="ml-24 w-4/5">
            <div className="flex flex-row justify-end pt-12 mr-32 ml-8 text-sm">
              <div className="flex flex-row items-center">
                <div variant="contained" onClick={this.handleNotificationClick}>
                  <img src={NotificationLogo} alt="notification logo" />
                </div>
                <a href="/home">
                  <img src={LogoutLogo} alt="logout logo" className="ml-10" />
                </a>
              </div>
            </div>
            <div className="w-4/5 m-auto ">
              {this.state.editing ? (
                <div>
                  <Header text="Yönetmelik" />
                  <div className="mt-8">
                    <TextEditor
                      onChange={this.textChanged}
                      placeholder="Yönetmeliği buraya yazabilirsiniz."
                      value={this.state.draftBody}
                    />
                  </div>
                  <div className="w-1/6 ml-auto py-4">
                    <Button
                      text="Oylamayı başlat"
                      onClick={this.toggleDrawer(
                        "changepolicymodal",
                        "right",
                        true
                      )}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <Header text="Yönetmelik" />
                  <div
                    className="mt-8 bg-white p-8"
                    dangerouslySetInnerHTML={{
                      __html: this.state.currentPolicy.body
                    }}></div>
                  {this.state.editable && (
                    <div className="w-1/6 ml-auto py-4">
                      <Button text="Düzenle" onClick={this.editClicked} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="justify-end">
            <History policyHistory={this.state.policyHistory} />
          </div>
        </div>
        <Notifications
          open={Boolean(this.state.anchorEl)}
          anchorEl={this.state.anchorEl}
          onClose={this.handleNotificationClose}
        />

        <DrawerModal
          type={this.state.modalType}
          right={this.state.right}
          toggleDrawer={this.toggleDrawer}
          openModal={this.openModal}
          draftBody={this.state.draftBody}
        />

        <FinalCongratsModal
          open={this.state.modalOpen}
          title={this.state.modalTitle}
          text={this.state.modalText}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default PolicyLayout;

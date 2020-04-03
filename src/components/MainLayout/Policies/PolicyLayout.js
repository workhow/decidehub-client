import React from "react";
import axios from "axios";
import moment from "moment";
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
import { withRouter } from "react-router-dom";

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
      selectedPolicy: null,
      draftBody: "",
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.editClicked = this.editClicked.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.policySelected = this.policySelected.bind(this);
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
      draftBody: this.state.currentPolicy.body,
    });
  }

  textChanged(newText) {
    this.setState({ draftBody: newText });
  }

  policySelected(policyId) {
    if (policyId === this.state.currentPolicy.id) {
      this.setState({
        selectedPolicy: this.state.currentPolicy,
      });
    } else {
      const selectedPolicy = this.state.policyHistory.filter(
        (p) => p.id === policyId
      )[0];

      if (selectedPolicy) {
        this.setState({
          selectedPolicy: selectedPolicy,
        });
      }
    }
  }

  getCurrentPolicy() {
    const currentPolicyPath = Util.pathForCurrentSubdomain("policy");

    axios
      .get(currentPolicyPath, {
        headers: Util.authenticationHeaders(),
      })
      .then((response) => {
        this.setState({
          currentPolicy: response.data,
          selectedPolicy: response.data,
          editing: response.data.id === 0,
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
          this.setState({
            ...this.state,
          });
        }
      });
  }

  getPolicyHistory() {
    const historyPath = Util.pathForCurrentSubdomain("policy/history");

    axios
      .get(historyPath, {
        headers: Util.authenticationHeaders(),
      })
      .then((response) => {
        this.setState({
          policyHistory: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          Util.signOut();
          this.setState({
            ...this.state,
          });
        }
      });
  }

  toggleDrawer = (modalType, side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      ...this.state,
      [side]: open,
      modalType: modalType,
    });
  };

  openModal = (modalTitle, modalText) => (event) => {
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
      right: false,
    });
  };

  closeModal = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      ...this.state,
      modalOpen: false,
    });
  };

  handleNotificationClick(event) {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
    });
  }

  handleNotificationClose() {
    this.setState({
      ...this.state,
      anchorEl: null,
    });
  }

  render() {
    if (!this.state.selectedPolicy) {
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
              <div
                class="flex items-center bg-blue-500 text-white text-sm my-4 px-4 py-3"
                role="alert"
              >
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                </svg>
                <p>
                  Yönetmeliğin son halini{" "}
                  <a
                    href={`https://${Util.getSubdomain()}.decidehub.com/yonetmelik`}
                  >
                    https://{Util.getSubdomain()}
                    .decidehub.com/yonetmelik
                  </a>{" "}
                  adresinden paylaşabilirsiniz.
                </p>
              </div>
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
                        "firstpolicymodal",
                        "right",
                        true
                      )}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <Header
                    text={
                      this.state.selectedPolicy.id ===
                      this.state.currentPolicy.id
                        ? "Mevcut Yönetmelik"
                        : `${moment
                            .utc(this.state.selectedPolicy.createdAt)
                            .local()
                            .format("DD MMMM YYYY")} tarihli Yönetmelik`
                    }
                  />
                  <div
                    className="mt-8 bg-white p-8"
                    dangerouslySetInnerHTML={{
                      __html: this.state.selectedPolicy.body,
                    }}
                  ></div>
                  {this.state.selectedPolicy.id ===
                    this.state.currentPolicy.id && (
                    <div className="w-1/6 ml-auto py-4">
                      <Button text="Düzenle" onClick={this.editClicked} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="justify-end">
            <History
              currentPolicy={this.state.currentPolicy}
              policyHistory={this.state.policyHistory}
              policySelected={this.policySelected}
            />
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

export default withRouter(PolicyLayout);

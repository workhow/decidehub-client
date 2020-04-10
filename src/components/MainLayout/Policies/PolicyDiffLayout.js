import React from "react";
import axios from "axios";
import h2p from "html2plaintext";
import Util from "../../../util";
import Loader from "../../Loader/Loader";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import LogoutLogo from "../Settings/cikis.svg";
import Header from "../Settings/Header/Header";
import ReactDiffViewer from "react-diff-viewer";

export class PolicyDiffLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    this.getCurrentPolicy();
    this.getNewPolicy();
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
          editing: response.data.id === 0,
          editable: true,
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

  getNewPolicy() {
    const policyId = this.props.match.params.id;
    const policyPath = Util.pathForCurrentSubdomain(`policy/${policyId}`);

    axios
      .get(policyPath, {
        headers: Util.authenticationHeaders(),
      })
      .then((response) => {
        this.setState({
          newPolicy: response.data,
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

  render() {
    if (!this.state.newPolicy || !this.state.currentPolicy) {
      return <Loader />;
    }
    return (
      <div>
        <LeftNavbar />
        <div className="flex flex-row">
          <div className="ml-16 w-full">
            <div className="flex flex-row justify-end pt-12 mr-32 ml-8 text-sm">
              <div className="flex flex-row items-center">
                <a href="/home">
                  <img src={LogoutLogo} alt="logout logo" className="ml-10" />
                </a>
              </div>
            </div>
            <div className="w-4/5 flex m-auto">
              <div className="flex-grow">
                <Header text="Mevcut Yönetmelik" />
                <div className="mt-8 mx-4 p-8 bg-white">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: this.state.currentPolicy.body,
                    }}
                  ></span>
                </div>
              </div>
              <div className="flex-grow">
                <Header text="Yeni Yönetmelik" />
                <div className="mt-8 mx-4 p-8 bg-white">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: this.state.newPolicy.body,
                    }}
                  ></span>
                </div>
              </div>
            </div>
            <div className="w-4/5 m-auto mt-12">
              <Header text="Değişen Bölümler" />
              <div className="mt-8 mx-4 bg-white">
                <ReactDiffViewer
                  oldValue={h2p(this.state.currentPolicy.body)}
                  newValue={h2p(this.state.newPolicy.body)}
                  splitView={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PolicyDiffLayout;

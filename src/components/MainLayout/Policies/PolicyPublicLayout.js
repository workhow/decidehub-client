import React from "react";
import axios from "axios";
import Util from "../../../util";
import Loader from "../../Loader/Loader";
import Header from "../Settings/Header/Header";

export class PolicyPublicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPolicy: null,
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    this.getCurrentPolicy();
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
    if (!this.state.currentPolicy) {
      return <Loader />;
    }
    return (
      <div className="mt-20">
        <div className="flex flex-row">
          <div className="ml-16 w-4/5">
            <div className="w-4/5 m-auto ">
              <div>
                <Header text={Util.getSubdomain() + " Mevcut Yönetmelik"} />
                <div
                  className="mt-8 bg-white p-8"
                  dangerouslySetInnerHTML={{
                    __html: this.state.currentPolicy.body,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="justify-end"></div>
        </div>
      </div>
    );
  }
}

export default PolicyPublicLayout;

import React, { Component } from "react";
import SubHeader from "../../../MainLayout/Settings/SubHeader/SubHeader";
import "./History.css";

class History extends Component {
  render() {
    return (
      <div className="fixed top-0 bottom-0 right-0 overflow-scroll w-1/6">
        <div className="bg-gray-dark text-white py-4 px-8">
          <p className="text-lg">Geçmiş</p>
        </div>
        <div className="flex flex-col p-2 bg-white h-screen">
          {this.props.policyHistory &&
            this.props.policyHistory.map((policy, index) => (
              <div className="w-full p-5">
                <p className="text-gray-dark text-sm">
                  {new Date(policy.createdAt).toLocaleString()}
                </p>
                <SubHeader text={policy.userName} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default History;

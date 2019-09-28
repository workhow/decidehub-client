import React, { Component } from "react";
import SubHeader from "../../../MainLayout/Settings/SubHeader/SubHeader";
import "./History.css";
import moment from "moment";
import "moment/locale/tr";

class History extends Component {
  constructor(props) {
    super(props);
    moment.locale("tr");
  }

  render() {
    return (
      <div className="fixed top-0 bottom-0 right-0 overflow-scroll w-1/6">
        <div className="bg-gray-dark text-white py-4 px-8">
          <p className="text-lg">Geçmiş</p>
        </div>
        <div className="flex flex-col p-2 bg-white h-screen">
          <div
            className="w-full p-5 hover:bg-gray-light"
            onClick={() =>
              this.props.policySelected(this.props.currentPolicy.id)
            }>
            <p className="text-gray-dark text-sm">Mevcut Yönetmelik</p>
            <SubHeader text={this.props.currentPolicy.userName} />
          </div>

          {this.props.policyHistory &&
            this.props.policyHistory.map((policy, index) => (
              <div
                key={policy.id}
                className="w-full p-5 hover:bg-gray-light"
                onClick={() => this.props.policySelected(policy.id)}>
                <p className="text-gray-dark text-sm">
                  {moment
                    .utc(policy.createdAt)
                    .local()
                    .format("DD MMMM YYYY")}
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

import React from "react";
import SettingsCard from "../../Settings/SettingsCard/SettingsCard";
import StatusIndicator from "../../../SetupLayout/StatusIndicator/StatusIndicator";
import SubHeader from "../../Settings/SubHeader/SubHeader";

class PollCard extends React.Component {
  render() {
    return (
      <SettingsCard>
        <div
          className="flex flex-row justify-between w-full py-2"
          onClick={this.props.vote(this.props.id)}>
          <div className="flex flex-row w-1/2">
            <img src={this.props.logo} alt="related logo" className="w-16"/>
            <p className="p-5 text-gray-dark text-base">
              {this.props.pollName}
            </p>
          </div>
          <div className="flex flex-row w-1/2 justify-between ml-8 md:ml-48">
            <div className="flex flex-col justify-center">
              <p className="text-gray-dark text-base">
                {new Date(this.props.pollEndDate).toDateString()}
              </p>
              <SubHeader text="Sonlanma Tarihi" />
            </div>
            <div className="flex h-full items-center ml-2">
              <StatusIndicator
                text={this.props.statusText}
                color={this.props.statusColor}
              />
            </div>
          </div>
        </div>
      </SettingsCard>
    );
  }
}

export default PollCard;

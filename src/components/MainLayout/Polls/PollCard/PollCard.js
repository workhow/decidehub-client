import React from "react";
import SettingsCard from "../../Settings/SettingsCard/SettingsCard";
import StatusIndicator from "../../../SetupLayout/StatusIndicator/StatusIndicator";
import SubHeader from "../../Settings/SubHeader/SubHeader";
import Util from "../../../../util";
import moment from "moment";
import "moment/locale/tr";

class PollCard extends React.Component {
  constructor(props) {
    super(props);
    moment.locale("tr");
  }

  render() {
    return (
      <SettingsCard>
        <div
          className="flex flex-row justify-between w-full py-2 cursor-pointer"
          onClick={this.props.vote(this.props.id)}>
          <div className="flex flex-row w-1/2">
            <img src={this.props.logo} alt="related logo" className="w-16" />
            <p className="p-5 text-gray-dark text-base">
              {this.props.pollName}
            </p>
          </div>
          <div className="flex flex-row w-1/2 justify-end ml-8">
            <div className="flex flex-col justify-center">
              <p className="text-gray-dark text-base text-right">
                Sonlanma Tarihi
              </p>
              <SubHeader
                className="text-right"
                text={Util.capitalize(
                  moment
                    .utc(this.props.pollEndDate)
                    .local()
                    .calendar()
                )}
              />
            </div>
            <div className="flex h-full items-center ml-8">
              <StatusIndicator
                className="w-48"
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

import moment from "moment";
import "moment/locale/tr";
import React from "react";
import Util from "../../../../util";
import SettingsCard from "../../Settings/SettingsCard/SettingsCard";

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
          <div className="flex flex-row">
            <img src={this.props.logo} alt="related logo" className="w-16" />
            <div> 
              <p className="p-5 ml-3 mt-2 text-gray-dark text-base">
                {this.props.pollName}
              </p>
              <p className="text-sm ml-3 text-gray-text">
                {Util.capitalize(
                  moment
                    .utc(this.props.pollEndDate)
                    .local()
                    .calendar()
                )} - {this.props.statusText}
              </p>
            </div> 
          </div>
        </div>
      </SettingsCard>
    );
  }
}

export default PollCard;

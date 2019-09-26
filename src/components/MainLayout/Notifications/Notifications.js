import React from "react";
import Popover from "@material-ui/core/Popover";
import SubHeader from "../../MainLayout/Settings/SubHeader/SubHeader";
import HorizontalRule from "./HorizontalRule/HorizontalRule";

export default function SimplePopover(props) {
  return (
    <div className="">
      <Popover
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}>
        <div className="p-8">
          <p className="pb-4">Decidehub BETA yayında.</p>
          <SubHeader text="26 Eylül 2019" />
          <HorizontalRule />
        </div>
      </Popover>
    </div>
  );
}

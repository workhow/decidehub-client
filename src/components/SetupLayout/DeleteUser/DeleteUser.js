import React from "react";
import BinLogo from "../StatusIndicator/delete.svg";

class DeleteUser extends React.Component {
    render() {
        return <div>
            <a href="!#"><img src={BinLogo} alt="bin logo"/></a>
        </div>
    }
}

export default DeleteUser;
import React from "react";
import LeftNavbar from "./LeftNavbar/LeftNavbar";

class MainLayout extends React.Component {
    render() {
        return <div>
            <LeftNavbar/>
            <div className="ml-24"></div>
        </div>
    }
}

export default MainLayout;
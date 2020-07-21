import axios from "axios";
import React from "react";
import Util from "../../../util";
import ProfilePic from "../../AccountLayout/Register/RegisterStepOne/manager.svg";
import Loader from "../../Loader/Loader";
import Card from "./Card/Card";
import "./MembersLayout.css";

class MembersLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    this.updateUserList();
  }

  updateUserList() {
    const listMembersPath = Util.pathForCurrentSubdomain("members");

    axios
      .get(listMembersPath)
      .then((response) => {
        this.setState({
          members: response.data,
        });
      });
  }

  render() {
    if (this.state.members.length === 0) {
      return <Loader />;
    }
    return (
      <div>
        <div className="ml-16">
          <div className="flex flex-row ml-16 md:ml-32 xl:ml-48 mt-16 lg:mt-32 m-8">
            <div className="flex items-center">
              <div className="text-2xl text-gray-dark inline ml-5">Üyeler</div>
            </div>
          </div>
          <div className="user-container mx-0 sm:mx-32 lg:mx-48 mt-8">
            {this.state.members.map((user) => (
              <Card
                key={user.id}
                name={`${user.firstName} ${user.lastName}`}
                email={user.email}
                imgLink={user.userImage || ProfilePic}
              />
            ))}
          </div>
        </div>
       </div>
    );
  }
}

export default MembersLayout;

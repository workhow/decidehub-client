import React from "react";
import axios from "axios";
import Util from "../../../util";
import Drawer from "@material-ui/core/Drawer";
import DrawerButton from "@material-ui/core/Button";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import Card from "./Card/Card";
import ProfilePic from "../../AccountLayout/Register/RegisterStepOne/manager.svg";
import FormBlock from "../../AccountLayout/Register/FormBlock/FormBlock";
import Button from "../../AccountLayout/Register/Button/Button";
import CloseLogo from "./kapat.svg";
import "../Users/UsersLayout.css";
import Loader from "../../Loader/Loader";

class UsersLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { right: false, users: [] };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount() {
    const listUserPath = Util.pathForCurrentSubdomain("users");

    axios
      .get(listUserPath, {
        headers: Util.authenticationHeaders()
      })
      .then(response => {
        this.setState({
          users: response.data
        });
      });
  }

  toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      ...this.state,
      [side]: open
    });
  };

  sideList = side => (
    <div
      style={{ width: 350 }}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}></div>
  );

  render() {
    if (this.state.users.length === 0) {
      return <Loader />;
    }
    return (
      <div>
        <LeftNavbar />
        <div className="ml-24">
          <div className="flex flex-row ml-16 md:ml-32 xl:ml-48 mt-16 lg:mt-32 m-8">
            <div>
              <p
                className="text-2xl text-gray-dark inline ml-5"
                onClick={this.toggleDrawer("right", true)}>
                Üyeler
              </p>
              <DrawerButton
                onClick={this.toggleDrawer("right", true)}
                className="text-base text-gray-text ml-8 inline">
                Yeni Ekle
              </DrawerButton>
            </div>
          </div>
          <div className="user-container mx-16 md:mx-32 xl:mx-48 mt-8">
            {this.state.users.map(user => (
              <Card
                name={`${user.firstName} ${user.lastName}`}
                email={user.email}
                imgLink={ProfilePic}
                initialAuthorityScore={user.initialAuthorityPercent}
              />
            ))}
          </div>
        </div>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}>
          {this.sideList("right")}
          <div className="m-4 md:m-12 lg:m-16 mb-6 bg-white">
            <img
              src={CloseLogo}
              alt="cross logo for closing the modal"
              className="flex flex row ml-auto cursor-pointer"
              onClick={this.toggleDrawer("right", false)}
            />
            <div className="flex flex-col text-center px-3 mt-20">
              <p className="text-2xl mb-24 mt-5 text-gray-dark">
                Yeni Kullanıcı Davet Et
              </p>
              <p className="text-base mb-10 mt-5 text-gray-dark">
                Bi bakalım.. Katılımcılar tamam, ayarlarıda kontol ettik artık
                hızlıca başlayabiliriz.
              </p>
              <div className="mb-5">
                <FormBlock
                  labelText="E-mail"
                  placeholderText="example@decidehub.com"
                />
              </div>
              <div className="mt-12">
                <Button text="Devam Et" />
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default UsersLayout;

import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Util from "../../util";

class ConfirmEmailLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verified: false };
  }

  componentDidMount() {
    const subdomain = Util.getSubdomain();
    const queryParams = Util.getQueryParams();

    const confirmEmailPath = Util.pathForSubdomain(
      subdomain,
      "account/confirmEmail"
    );

    axios
      .post(confirmEmailPath, {
        userId: queryParams.userId,
        code: queryParams.code,
        subdomain: subdomain
      })
      .then(() => {
        this.setState({ verified: true });
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data[0].description);
        } else {
          alert(error);
        }
      });
  }
  render() {
    return <div>{this.state.verified ? <Redirect to="/home" /> : <div />}</div>;
  }
}

export default ConfirmEmailLayout;

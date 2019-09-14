import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = localStorage.currentUserToken;
      if (currentUser) {
        // authorised so return component
        return <Component {...props} />;
      }

      // not logged in so redirect to login page with the return url
      return (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      );
    }}
  />
);

export default PrivateRoute;

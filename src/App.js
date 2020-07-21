import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ConfirmEmailLayout from "./components/AccountLayout/ConfirmEmailLayout";
import ForgotPasswordLayout from "./components/AccountLayout/ForgotPasswordLayout";
import RegisterLayout from "./components/AccountLayout/RegisterLayout";
import ResetPasswordLayout from "./components/AccountLayout/ResetPasswordLayout";
import SignInLayout from "./components/AccountLayout/SignInLayout";
import LandingPage from "./components/LandingPage/LandingPage";
import MainLayout from "./components/MainLayout/MainLayout";
import MembersLayout from "./components/MainLayout/Members/MembersLayout";
import PolicyDiffLayout from "./components/MainLayout/Policies/PolicyDiffLayout";
import PolicyLayout from "./components/MainLayout/Policies/PolicyLayout";
import PolicyPublicLayout from "./components/MainLayout/Policies/PolicyPublicLayout";
import CurrentPollsLayout from "./components/MainLayout/Polls/CurrentPollsLayout/CurrentPollsLayout";
import SettingsLayout from "./components/MainLayout/Settings/SettingsLayout";
import UsersLayout from "./components/MainLayout/Users/UsersLayout";
import NotFoundLayout from "./components/NotFoundLayout/NotFoundLayout";
import SetupLayout from "./components/SetupLayout/SetupLayout";
import PrivateRoute from "./PrivateRoute";

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/home" component={MainLayout} />
        <Route exact path="/login" component={SignInLayout} />
        <Route exact path="/signup" component={RegisterLayout} />
        <Route exact path="/confirm-email" component={ConfirmEmailLayout} />
        <Route exact path="/forgot-password" component={ForgotPasswordLayout} />
        <Route exact path="/reset-password" component={ResetPasswordLayout} />
        <PrivateRoute exact path="/setup" component={SetupLayout} />
        <PrivateRoute exact path="/users" component={UsersLayout} />
        <PrivateRoute exact path="/settings" component={SettingsLayout} />
        <PrivateRoute exact path="/polls" component={CurrentPollsLayout} />
        <PrivateRoute
          exact
          path="/policy/diff/:id"
          component={PolicyDiffLayout}
        />
        <PrivateRoute exact path="/policy" component={PolicyLayout} />
        <Route exact path="/yonetmelik" component={PolicyPublicLayout} />
        <Route exact path="/members" component={MembersLayout} />

        <Route component={NotFoundLayout} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;

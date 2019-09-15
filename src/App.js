import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import PrivateRoute from "./PrivateRoute";
import NotFoundLayout from './components/NotFoundLayout/NotFoundLayout';
import SignInLayout from './components/AccountLayout/SignInLayout';
import RegisterLayout from "./components/AccountLayout/RegisterLayout";
import ResetPasswordLayout from './components/AccountLayout/ResetPasswordLayout';
import ForgotPasswordLayout from "./components/AccountLayout/ForgotPasswordLayout";
import SetupLayout from './components/SetupLayout/SetupLayout';
import MainLayout from './components/MainLayout/MainLayout';
import UsersLayout from './components/MainLayout/Users/UsersLayout';
import SettingsLayout from './components/MainLayout/Settings/SettingsLayout';
import CurrentPollsLayout from './components/MainLayout/Polls/CurrentPollsLayout/CurrentPollsLayout';
import PolicyLayout from './components/MainLayout/Policies/PolicyLayout';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <PrivateRoute exact path="/" component={MainLayout} />
        <Route exact path="/login" component={SignInLayout} />
        <Route exact path="/signup" component={RegisterLayout} />
        <Route exact path="/confirm-email" component={ConfirmEmailLayout} />
        <Route exact path="/forgot-password" component={ForgotPasswordLayout} />
        <Route exact path="/reset-password" component={ResetPasswordLayout} />
        <Route exact path="/404" component={NotFoundLayout} />
        <PrivateRoute exact path="/setup" component={SetupLayout} />
        <PrivateRoute exact path="/users" component={UsersLayout} />
        <PrivateRoute exact path="/settings" component={SettingsLayout} />
        <PrivateRoute exact path="/polls" component={CurrentPollsLayout} />
        <PrivateRoute exact path="/policy" component={PolicyLayout} />
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </Fragment>
  </Router>
);

export default App;

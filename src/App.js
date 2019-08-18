import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NotFoundLayout from './components/NotFoundLayout/NotFoundLayout';
import SignInLayout from './components/AccountLayout/SignInLayout';
import RegisterStepOne from './components/AccountLayout/SignUpStepOneLayout';
import RegisterStepTwo from './components/AccountLayout/SignUpStepTwoLayout';
import ResetPasswordLayout from './components/AccountLayout/ResetPasswordLayout';

const App = () => <Router>
    <Fragment>
        <Switch>
            <Route exact path="/" component={SignInLayout}/>
            <Route exact path="/signup-step1" component={RegisterStepOne}/>
            <Route exact path="/signup-step2" component={RegisterStepTwo}/>
            <Route exact path="/reset-password" component={ResetPasswordLayout}/>
            <Route exact path="/404" component={NotFoundLayout}/>
        </Switch>
    </Fragment>
</Router>
export default App;

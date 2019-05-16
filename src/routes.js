import React from "react";
import Login from "./component/Login";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Homepage, Signup, About, AccountSettings } from "./containers";
import { isLoggedIn } from "./utils";
import ShowProducts from "./containers/Products/ShowProducts"
import Products from "./component/Products";
import MainComponent from "./containers/common/MainComponent";
import ForgotPassword from "./component/ForgotPassword";
import ResetPassword from "./component/ResetPassword";
import CheckMail from "./component/CheckMail"
import { privateDecrypt } from "crypto";


const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route
    {...rest}
    render={props =>
      isLoggedIn() ?
        <React.Fragment>
          <MainComponent {...props}>
            <Component  {...props} />
          </MainComponent>
        </React.Fragment> : <Redirect to="/login" />
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export default class extends React.Component {
  render() {
    return (
      <Router >
        <Switch>
          <PrivateRoute exact path="/" component={Homepage} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/showproducts" component={ShowProducts} />
          <PrivateRoute path="/products" component={Products} />
          <PublicRoute path="/forgotpassword" component={ForgotPassword} />
          <PublicRoute path="/resetpassword/:token" component={ResetPassword} />
          <PublicRoute path="/checkmail" component={CheckMail} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/accountsettings" component={AccountSettings} />
          <Route component={NotFound} />

        </Switch>
      </Router>
    );
  }
}


class NotFound extends React.Component {
  state = {}
  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>The route you are looking for is not found</h1>
      </div>
    );
  }
}
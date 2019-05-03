import React from "react";
import Login from "./component/Login";
import Products from "./component/Products"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Homepage, Signup, Sidebar } from "./containers";
import { isLoggedIn } from "./utils";
import CustomNav from "./containers/common/CustomNav";
import MainComponent from "./containers/common/MainComponent";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <React.Fragment>
        <MainComponent />
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
      <div>
        <Router >
          <Switch>
            <PrivateRoute exact path="/" component={Homepage} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
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
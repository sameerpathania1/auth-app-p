import React from "react";
import Login from "./component/Login";
import "./App.css"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Homepage, Signup } from "./containers";
import { isLoggedIn } from "./utils";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
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

class App extends React.Component {
  render() {
    return (
      <div>
        <Router >
          <Switch>
            <PrivateRoute exact path="/" component={Homepage} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

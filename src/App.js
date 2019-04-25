import React from "react";
import Login from "./component/User";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Homepage } from "./containers";
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
      isLoggedIn() ? <Redirect to="/" /> : <Login {...props} />
    }
  />
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Homepage} />
          <PublicRoute path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React from "react";
import Login from "./component/Login";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { Homepage, Signup, Sidebar } from "./containers";
import { isLoggedIn } from "./utils";
import CustomNav from "./containers/common/CustomNav";
import ShowProducts from "./containers/Products/ShowProducts"
import Products from "./component/Products";
import MainComponent from "./containers/common/MainComponent";

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route
    {...rest}
    render={props =>

      isLoggedIn() ? <React.Fragment>
        {/* <CustomNav {...props}  >
          <Component {...props} />
        </CustomNav>
        <Sidebar {...props} >
          <Component  {...props} />
        </Sidebar> */}
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
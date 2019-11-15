import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";

import Menu from "./pages/Menu";

import Recup from "./pages/Recup";

import Cadastro from "./pages/Cadastro";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("User/token") ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route path="/recup" component={Recup} />

        <Route path="/cadastro" component={Cadastro} />

        <PrivateRoute path="/menu" component={Menu} />

        
      </Switch>
    </BrowserRouter>
  );
}

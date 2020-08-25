import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateNaver from "./pages/CreateNaver";
import EditNaver from "./pages/EditNaver";
import AuthContext from "./contexts/auth";

interface RouteProps {
  exact?: boolean;
  isPrivate?: boolean;
  component: React.FC;
  path: string;
}

function PrivateRoute({ isPrivate, ...rest }: RouteProps) {
  const { isSigned } = useContext(AuthContext);

  if (isPrivate && !isSigned) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && isSigned) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} />;
}

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} isPrivate />
        <PrivateRoute path="/create" component={CreateNaver} isPrivate />
        <PrivateRoute path="/edit" component={EditNaver} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

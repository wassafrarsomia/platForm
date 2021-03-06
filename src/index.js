import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProductPage from "views/ProductCreation/ProductCreation";
import consult from "views/Filter/filterPage";
import ConseillePage from "views/ConseilleAgri"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/consultProduct-page" component={consult} />
      <Route path="/conseille-page" component={ConseillePage} />


      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

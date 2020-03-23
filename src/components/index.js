import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreNav from "./navigation/StoreNav";

export default function FrontEndRouter() {
  return(
  <Router>
  <StoreNav />
    <Switch>
          <Route exact path="/" />
          <Route path="/Register" />
          <Route path="/Login" />
          <Route path="/Orders" />
          <Route path="/BookDetails" />
          <Route path="/ShopCart" />
    </Switch>
  </Router>
);
}

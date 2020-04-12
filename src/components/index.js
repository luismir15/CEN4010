import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreNav from "./navigation/StoreNav";
import Home from './browsing/Home';
import BookDetails from './details/BookDetails';
import AuthorView from './browsing/AuthorView';

export default function FrontEndRouter() {
  return(
  <Router>
  <StoreNav />
    <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Register" />
          <Route path="/Login" />
          <Route path="/Orders" />
          <Route path="/Book/:id" component={BookDetails}/>
          <Route path="/ShopCart" />
          <Route path="/Author/:authorName" component={AuthorView}/>
    </Switch>
  </Router>
);
}

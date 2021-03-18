import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import JobList from "../components/JobList";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:jobboard" exact component={JobList}/>
    </Switch>
  </Router>
);
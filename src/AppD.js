import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Donate from './components/Donate';
import Failure from './components/Failure';
import Home from './components/Home';
import Success from './components/Success';

function AppD() {
  return (
    <BrowserRouter basename="/practice-s">
      <div>
        my app
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/donate" component={Donate}></Route>
          <Route path="/success" component={Success}></Route>
          <Route path="/failure" component={Failure}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppD;

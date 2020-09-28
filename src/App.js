import React from 'react';
import "./Component/FontAwesomeIcons/index";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Component/layout/Login';
import SignUp from './Component/layout/SignUp';
import TimeLine from './Component/layout/TimeLine';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={Login} />
        <Route path="/" component={TimeLine} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

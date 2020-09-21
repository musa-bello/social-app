import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Component/layout/Login';
import SignUp from './Component/layout/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

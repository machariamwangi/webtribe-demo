import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from  './Components/pages/Login';
import Signup from './Components/pages/Signup';
import Main from './Components/pages/Main';
function App() {
  return (
   
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from './Components/protectedRoutes/ProtectedRoute';
import Login from  './Components/pages/Login';
import Signup from './Components/pages/Signup';
import Main from './Components/pages/Main';
function App() {
  return (
   
    <Router>
      <div className="app">
        <Switch>
          <Route exact={true} path="/signup">
            <Signup />
          </Route>
          <ProtectedRoute exact={true} path="/" component={Main} />
          <Route exact={true} path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


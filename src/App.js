// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import components
// import MyBots from './pages/Bots'
import MyBots from "./pages/MyBots";
import BotMap from "./pages/BotMap";
import Initiate from "./pages/Initiate";
import Exchange from "./pages/Exchange";
import Dashboard from './pages/Dashboard/index'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Suspense>
      <Router>
        <Switch>
          <Route exact path="/bot-map">
            <BotMap />
          </Route>
          <Route exact path="/my-bots">
            <MyBots />
          </Route>
          <Route exact path="/initiate-bots">
            <Initiate />
          </Route>
          <Route exact path="/bot-exchange">
            <Exchange />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;

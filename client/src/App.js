import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Seventeen from "./pages/2017";
// import Eighteen from "./pages/2018";
// import Nineteen from "./pages/2019";

const App = () => (
  <Router>
    <div>
      <Switch>
        {/* <Route exact path="/" component={Eighteen} /> */}
        <Route exact path="/2017" component={Seventeen} />
      </Switch>
    </div>
  </Router>
)

export default App;



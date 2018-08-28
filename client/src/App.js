import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Seventeen from "./pages/2017";
// import Eighteen from "./pages/2018";
// import Nineteen from "./pages/2019";

const App = () => (
<Router>
<div>
  Hello
<Switch>
  <Route></Route>
  {/* <Route exact path="/" component={Books} /> */}
</Switch>
</div>
</Router>
)

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

// const App = () => (
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Books} />
//         <Route exact path="/books" component={Books} />
//         <Route exact path="/books/:id" component={Detail} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;

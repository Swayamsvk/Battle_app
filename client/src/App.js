import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./components/List/List";
import Home from "./components/Home/Home";
import Count from "./components/Count/Count";
import Search from "./components/Search/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/count" component={Count} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;

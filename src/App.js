import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
          <Route path="/team" component={Home} />
          <Route path="/messages" component={Home} />
          <Route path="/support" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// alt shift downarrow

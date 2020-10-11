import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Service } from "./components/pages/Services";
import { Product } from "./components/pages/Product";
import { SignUp } from "./components/pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        {/* This navbar has the react-route-dom Link component to link to the pages defined in the  Switch */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/products" component={Product} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

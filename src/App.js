import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/blog" component={() => <Blog />} />
        <Route path="/resume" component={() => <Resume />} />
        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;

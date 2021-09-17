import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Twitter from "./components/Twitter";
import Github from "./components/Github";
import Eight from "./components/Eight";

import { render } from "@testing-library/react";

function App() {
  return (
    <div>
      <Header />
      <Twitter />
      <Github />
      <Eight />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <h1>furusin's portfolio</h1>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

function App() {
  return (
    <div>
      <Twitter />
      <Github />
      <Eight />
    </div>
  );
}

function Twitter() {
  return (
    <div>
      <a href="https://twitter.com/furusin_oriver" target="_blank">
        Twitter
      </a>
    </div>
  );
}

function Github() {
  return (
    <div>
      <a href="https://github.com/furusin" target="_blank">
        Github
      </a>
    </div>
  );
}

function Eight() {
  return (
    <div>
      <a href="https://8card.net/p/39871470746" target="_blank">
        Eight
      </a>
    </div>
  );
}

export default App;

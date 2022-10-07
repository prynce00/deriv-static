import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
const { Octokit } = require("@octokit/core");

const App = () => {
  
  const connect = async () => {
    const octokit = new Octokit({
      auth: "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",
    });

    
   const test = await octokit.request("GET /repos/prince-deriv/deriv-static/contents/", {
      owner: "OWNER",
      repo: "REPO",
      path: "PATH",
    });

    console.log(test)
  };



  useEffect(() => {
    connect()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

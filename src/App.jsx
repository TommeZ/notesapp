import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import { myAsyncFunction } from "../promises";

function App() {
  useEffect(() => {
    myAsyncFunction();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Hello from Amplify</h1>
      </header>
    </div>
  );
}

export default App;

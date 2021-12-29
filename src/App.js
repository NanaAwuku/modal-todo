import React from "react";
import Todo from "./Todo";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <h1>MY TODO</h1>
      <Todo title="playstion" />
      <Todo title="nintendo" />
      <Todo title="soccer" />
    </div>
  );
}

export default App;

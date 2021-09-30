import { useState } from "react";
import "./App.css";

import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [tasks, setTask] = useState();
  return (
    <div className="App">
      <div className="contents">
        <h3>Ola mundo</h3>
        <div className="container">
          <Button></Button>
          <Input
            onChange={(InputText) => {
              setTask();
            }}
          ></Input>
        </div>
      </div>
    </div>
  );
}

export default App;

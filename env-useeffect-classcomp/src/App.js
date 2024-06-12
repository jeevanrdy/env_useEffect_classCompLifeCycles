import { useState } from "react";
import "./App.css";
import FuncComp from "./components/FuncComp";
import ClasComp from "./components/ClasComp";

function App() {
  let [show, setShow] = useState(true);

  return (
    <div className="App">
      <div className="tooglestyle">
        <button
          type="button"
          onClick={() => {
            if (show === true) {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
        >
          Toggle
        </button>
      </div>
      {show === true ? <FuncComp /> : null}
      {show === true ? <ClasComp/> : null}
      
    </div>
  );
}

export default App;

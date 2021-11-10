import Registry from "./components/Registry.jsx";
import "./styles/App.css";
import dome from "./img/dooome.png";

import { useState } from "react";

export default function App() {
  const [lookRegister, setLookRegister] = useState(false);
  const [buttonText, setButtonText] = useState("Open the summit registry.");

  const onClick = () => {
    if (lookRegister === false) {
      setLookRegister(true);
      setButtonText("Close the summity registry.");
    } else {
      setLookRegister(false);
      setButtonText("Open the summit registry.");
    }
  };
  return (
    <>
      <div id="layout-grid">
        <div id="welcome">
          <img src={dome} alt = "An artistic edit of a photograph that views a round, jagged peak: Fin Dome, Kings Canyon National Park." />
          <h1>Welcome to the top of Fin Dome!</h1>
          <button onClick={onClick} id = "control-registry">{buttonText}</button>
        </div>
        <div id="registry">
          <Registry lookRegister={lookRegister} />
        </div>
      </div>
    </>
  );
}


//----necessary imports

//importing Registry component
import Registry from "./components/Registry.jsx";
//importing CSS
import "./styles/App.css";
//importing image
import dome from "./img/dooome.png";
//importing hook from React
import { useState } from "react";


//---component function
export default function App() {
  //controls if the user is "looking" at the registry
  const [lookRegistry, setLookRegistry] = useState(true);
  const [buttonText, setButtonText] = useState("Close the summit registry.");


//handles the rendering of the Registry component dependant on click
  const onClick = () => {
    if (lookRegistry === true) {
      setLookRegistry(false);
      setButtonText("Open the summit registry.");
    } else {
      setLookRegistry(true);
      setButtonText("Close the summit registry.");
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
          <Registry lookRegistry={lookRegistry} />
        </div>
      </div>
    </>
  );
}

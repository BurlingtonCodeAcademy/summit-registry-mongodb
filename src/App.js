import Peak from "./components/Registry.jsx";
import './styles/App.css'
import poster from './img/findome-tomkillion.jpg'


import  { useState } from "react";

export default function App() {
  
  const [lookRegister, setLookRegister] = useState(false)
  const [buttonText, setButtonText] = useState("Open the registry.")

  const onClick = () => {
    if (lookRegister === false) {
      setLookRegister(true)
      setButtonText("Close the registry.")
    } else {
      setLookRegister(false)
      setButtonText("Open the registry.")
      
    }
  }
  return (
    <>
    <div id = "welcome">
    <img src={poster} />
    <h1>Welcome to the top of Fin Dome!</h1>
    <button onClick = {onClick}>{buttonText}</button>
    </div>
    <div id = "registry">
      <Peak lookRegister = {lookRegister} />
      </div>
    </>
  );
}

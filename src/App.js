import Peak from "./components/Peak.jsx";
import './styles/App.css'


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
    <h1>Welcome to the top of Fin Dome!</h1>
    <button onClick = {onClick}>{buttonText}</button>
      <Peak lookRegister = {lookRegister} />
    </>
  );
}

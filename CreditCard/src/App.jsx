import { useState } from "react";


import CreditCardForm from "./Components/CreditCardForm";
import CreditCard from "./Components/CreditCard";

const initialState = {
  number: "",
  name: "",
  validThru: "",
  cvv: ""
};

export default function App() {
  const [state, setState] = useState(initialState);

  const handleChange = (key, value) => {
    const newState = { ...state };
    newState[key] = value;
    setState(newState);
  };

  return (
    <div className="container">
     
      <CreditCard cardInfo={state} />
     

     
    </div>
  );
}

import React from "react";
import { useState } from "react";

import CreditCardForm from "../Components/CreditCardForm";

const initialState = {
  number: "",
  name: "",
  validThru: "",
  cvv: ""
};

const CreditCard = ({ cardInfo }) => {
  return (
    <div className="card">
      <h2>Credit Card Information</h2>
      <p>Card Number: {cardInfo.number}</p>
      <p>Name: {cardInfo.name}</p>
      <p>Valid Thru: {cardInfo.validThru}</p>
      <p>CVV: {cardInfo.cvv}</p>
    </div>
  );
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
      <h1 >Credit Card Input Widget</h1>
      <CreditCard cardInfo={state} />
      <CreditCardForm handleChange={handleChange} />

      <button type="submit" className="pay" onClick={() => console.log(state)}>
        Pay
      </button>
    </div>
  );
}
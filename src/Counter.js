import React from 'react';

function Counter() {
  const[counter, setcounter] = React.useState(0);
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  
  const validateDelete = (evtTarget) => {
    evtTarget.value = evtTarget.value.toUpperCase();

    if (evtTarget.value === "DELETE"){
      setBtnDisabled(false);
    }else{
      setBtnDisabled(true);
    }
  }

  return (
    <div className="Counter">
      <h1>This is counter app</h1>
      <div id="counter-value" data-testid="counter-value">{counter}</div>
      <button id="increment-btn" onClick={()=>setcounter(counter+1)}>Increment</button>
      <button id="decrement-btn" onClick={()=>setcounter(counter? counter-1: 0)}>Decrement</button>
        <br />
        <br />
      <input id="deletetxt" data-testid="deletetxt" placeholder="Enter DELETE" onChange={e => {validateDelete(e.target);}} data-autofocus="true"/>
      <button id="delete-btn" data-testid="delete-btn" disabled={btnDisabled} >Delete</button>

    </div>
  );
}

export default Counter;
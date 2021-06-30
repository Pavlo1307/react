import {useReducer} from "react";

function reducer(state, action) {

  switch (action.type) {
    case 'INCREMENT_A':
      return{...state, a: state.a + action.playload}
    case 'INCREMENT_B':
      return{...state, b: state.b + action.playload}
  }
}

export default function App() {

  let[state, dispatch] = useReducer(reducer, {a:0, b:0});

  return (
      <div>
        <button onClick={() =>{dispatch({type:'INCREMENT_A', playload:1});} }>inc a  - {state.a}</button>
        <br/>
        <button onClick={() =>{dispatch({type:'INCREMENT_B', playload:2});} }>inc a  - {state.b}</button>

      </div>
  );
}



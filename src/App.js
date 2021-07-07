import Child from "./child/Child";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Posts from "./posts/Posts";
import {logDOM} from "@testing-library/react";

export default function App() {

    const dispatch = useDispatch();
    let numberForInput = 0;
    let [formState, setFormState] = useState({number:0, password:0})

    function onSubmit(e){
        e.preventDefault();
        numberForInput = e.target.number.value
    }
    function onChange(e){
        setFormState({formState, [e.target.name]: e.target.value})
    }

  return (
      <div>
          <Child/>

          <button onClick={() =>{
              dispatch({type:'INC'})
          }
          }>inc</button>

          <button onClick={() =>{
              dispatch({type:'DEC'})
          }
          }>dec</button>

          <button onClick={() =>{
              dispatch({type:'RES'})
          }
          }>ref</button>
            <br/>
          <label htmlFor="name">Number</label>
          <br/>
          <form onSubmit={onSubmit}>
              <input type="number" name={'number'} value={formState.number} onChange={onChange}/>
              <button onClick={() =>{
                  dispatch({
                      type:'INPUT_INC',
                      payload: numberForInput

                  })
              }
              }>Input</button>
          </form>


          {/*<Posts/>*/}

      </div>

        );
}



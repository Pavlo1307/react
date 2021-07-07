import Child from "./child/Child";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Posts from "./posts/Posts";
import {logDOM} from "@testing-library/react";
import Users from "./users/Users";

export default function App() {

    const dispatch = useDispatch();
    let [formState, setFormState] = useState({number:'', password:''})

    function onSubmit(e){
        e.preventDefault()
        dispatch({
            type:'INPUT_INC',
            payload: formState.number
        })
    }
    function onChange(e){
        setFormState({...formState, [e.target.name]: e.target.value})
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
              <button>Input</button>
          </form>

          {/*<Posts/>*/}
          <Users/>

      </div>

        );
}



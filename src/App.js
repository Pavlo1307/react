import {useSelector} from "react-redux";
import {useState} from "react";


const CreateTodosForm = (onSubmit) =>{

    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        //console.log(title, descr)

        if(!title  || !descr)

        onSubmit(title, descr)

    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={'title'}
                value={title}
                onChange={({target:{value}})=>setTitle(value)}/>
            <br/>
            <br/>
            <input
                type="text"
                placeholder={'descriptions'}
                value={descr}
                onChange={({target:{value}})=>setDescr(value)}/>
            <br/>
            <br/>
            <button type="submit" disabled={!title || !descr}>create todo </button>
        </form>
    );
};

export default function App() {
    const store = useSelector(state=> state)
    console.log(store)
    const onTodoCreate = async (title, descr) =>{
        if(!title  || !descr) return;

        const response = await fetch('http://localhost:8888',{
            method: 'POST',
            body: JSON.stringify({title, descr})
        })
        const data = await response.json()
        console.log(data)

    }
    return (
      <div>
          <CreateTodosForm onSubmit={onTodoCreate}/>
      </div>
        );
}



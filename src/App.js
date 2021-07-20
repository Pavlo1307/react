import {useSelector} from "react-redux";
import {useState} from "react";


const CreateTodosForm = ({onSubmit}) =>{

    const [title, setTitle] = useState('');
    const [descriptions, setDescriptions] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(title, descriptions)


        onSubmit(title, descriptions)

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
                value={descriptions}
                onChange={({target:{value}})=>setDescriptions(value)}/>
            <br/>
            <br/>
            <button type="submit" disabled={!title || !descriptions}>create todo </button>
        </form>
    );
};

export default function App() {

    const store = useSelector(state=> state)
    console.log(store)
    const onTodoCreate = async (title, description) => {
        if(!title || !description) return;

        const response = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
    }
    return (
      <div>
          <CreateTodosForm onSubmit={onTodoCreate}/>
      </div>
        );
}



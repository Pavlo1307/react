import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";


const CreateTodosForm = ({onSubmit}) =>{

    const [title, setTitle] = useState('');
    const [descriptions, setDescriptions] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(title, descriptions)

        try{
            setLoading(true);
            await onSubmit(title, descriptions)
            setTitle('')
            setDescriptions('')
        } catch (e){
            console.log(e)
        }
        finally {
            setLoading(false);
        }





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
            <button type="submit" disabled={!title || !descriptions || loading}>create todo </button>
        </form>
    );
};

const TodosLists = (todos, isLoading) =>{

    return (
        <div>
            {todos.map(todo => (
                <div>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default function App() {

    const todos = useSelector(({todosReduser})=> todosReduser);
    const dispatch = useDispatch();
    useEffect(() =>{
        fetchTodos()
    },[])
    const fetchTodos = async () =>{
        try {
            const response = await fetch('http://localhost:8888/get-todos')
            const data = await response.json();
            dispatch({type:'ADD_TODOS', payload:data})
        }catch (e){
            console.log(e)
        }finally {

        }


    }

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

    }
    return (
      <div>
          <CreateTodosForm onSubmit={onTodoCreate}/>
          <TodosLists todos={todos}/>
      </div>
        );
}



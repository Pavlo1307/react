import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addTodo, delTodo, pushNewTodo, setLoadingFalse, setLoadingTrue, changeTodo} from "./redux/actionsCreators";


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


const TodosList = ({todos, isLoading, deleteTodo, onChangeTodo}) => {

    if(isLoading) return <h1>LOADING....</h1>
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    <span>Is complated? : {todo.completed.toString()}</span>
                    <button onClick={()=> onChangeTodo(todo.id, todo.completed)}> change </button>
                   <br/><br/>
                    <button onClick={()=> deleteTodo(todo.id)}>delete</button>
                    <hr/>
                </div>
            ))}
        </div>
    )
}
export default function App() {

    const {todos, isLoading} = useSelector(({todosReduser})=> todosReduser);
    console.log(todos);
    const dispatch = useDispatch();
    useEffect(() =>{
        fetchTodos()
    },[])
    const fetchTodos = async () =>{
        try {
            dispatch(setLoadingTrue())
            const response = await fetch('http://localhost:8888/get-todos')
            const data = await response.json();
            dispatch(addTodo(data))

        }catch (e){
            console.log(e)
        }finally {
            dispatch(setLoadingFalse())
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
        dispatch(pushNewTodo(data))
    }

    const deleteTodo = async (id) =>{
        let response = await fetch('http://localhost:8888/delete-todo/' + id, {
            method: 'DELETE'
        });
        dispatch(delTodo(id))
        console.log(id)

    };

    const onChangeTodo = async (id, completed)=>{
        let response = await fetch('http://localhost:8888/update-todo/' + id, {
            method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        const data = await response.json();
        dispatch(changeTodo(data))
        console.log(data);
    }

    return (
      <div>
          <CreateTodosForm onSubmit={onTodoCreate}/>
          <TodosList todos={todos} isLoading={isLoading} deleteTodo={deleteTodo} onChangeTodo={onChangeTodo}/>
      </div>
        );
}




const initialState = {
    todos: [],
}

export const todosReduser = (state = initialState,action)=> {

    switch (action.type){
        case 'ADD_TODOS':{
            return {
                ...state, todos: action.payload
            }
        }
        default:
            return state
    }
}
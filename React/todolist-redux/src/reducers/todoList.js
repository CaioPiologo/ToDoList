
const todo = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                name: action.name,
                id: action.id
            };
        default:
            return state;
    }
}

const todoList = (state =[], action) => {
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined, action)
                ];
        case "REMOVE_TODO":
            return [
                ...state.slice(0, action.pos),
                ...state.slice(action.pos+1,)
            ];
        default:
            return state;
    }
}

export default todoList;
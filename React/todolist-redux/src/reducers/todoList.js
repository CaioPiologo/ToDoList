
const todo = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                text: action.text,
                id: action.id
            };
        default:
            return state;
    }
}

const todoList = (state =[], action) => {
    console.log(...state);
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
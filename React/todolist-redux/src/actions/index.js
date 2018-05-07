let idGenerator = 0;
export const addTask = (name) => {
    return {
        type: 'ADD_TODO',
        id: (idGenerator++).toString(),
        name
    }
}

export const removeTask = (pos) => {
    return {
        type: 'REMOVE_TODO',
        pos
    }
}
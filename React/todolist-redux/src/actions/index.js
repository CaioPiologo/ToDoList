let idGenerator = 0;
export const addTask = (text) => {
    return {
        type: 'ADD_TODO',
        id: (idGenerator++).toString(),
        text:text
    }
}
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECIEIVE_TODO';

const receiveTodos = (todos) => {
    type: RECEIVE_TODOS,
    todos
}

const receiveTodo = (todo) => {
    type: RECEIVE_TODO,
    todo
}
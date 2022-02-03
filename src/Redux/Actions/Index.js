import * as types from "../Constants/const"


export const addNote = (data) => ({
    type: types.ADD_NOTE,
    data: data
})

export const deleteNote = (data) => ({
    type: types.DELETE_NOTE,
    data: data
})

export const addTodo = (data) => ({
    type: types.ADD_TODO,
    data: {
        name: data,
        count: 0,
        state: false
    }
})
export const deleteTodo = (index) => ({
    type: types.DELETE_TODO,
    data: index
})

export const activeTodo = (index) => ({
    type: types.ACTIVE_TODO,
    data: index
})

export const getData = (data) => ({
    type: types.GET_DATA,
    data: data
})

export const login = () => ({
    type: types.LOGIN
})
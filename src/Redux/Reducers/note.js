import * as types from "../Constants/const"

const initialState = {
    notes: [],
    todolist: [],
    login: false
}


export default function note (state = initialState, action) {
    switch(action.type){
        case types.ADD_NOTE:{
            var arr = state.notes;
            arr.push(action.data);
            return {
                ...state,
                notes: arr
            }
        }
        case types.DELETE_NOTE: {
            var arr = state.notes;
            arr.splice(action.data, 1)
            return {
                ...state,
                notes: arr
            }
        }
        case types.ADD_TODO: {
            var arr = state.todolist;
            arr.push(action.data);
            return {
                ...state,
                todolist: arr
            }
        }
        case types.ACTIVE_TODO: {
            var arr = state.todolist;
            arr[action.data].count++;
            arr[action.data].state = true;
            return {
                ...state,
                todolist: arr
            }
        }
        case types.DELETE_TODO: {
            var arr = state.todolist;
            arr.splice(action.data, 1);
            return {
                ...state,
                todolist: arr
            }
        }
        case types.GET_DATA: {
            return {
                notes: action.data.notes,
                todolist: action.data.todolist,
                login: false
            }
        }
        case types.LOGIN: {
            return {
                ...state,
                login: true
            }
        }
    }
    return initialState;
}
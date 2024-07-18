import {types} from "../types";

const initialState = {
    users:[],
    selectedUser: null
}

export default function usersPageReducer(state = initialState,action){
    switch (action.type){
        case types.USERS:
            return {...state,users:action.payload}
        case types.USERS_ID:
            return {...state,selectedUser:action.payload}
        default: return state
    }
}
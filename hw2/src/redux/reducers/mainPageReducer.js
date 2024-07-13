import {types} from "../types";

const initialState = {
    title:"GeekTech"
}

export default function mainPageReducer(state = initialState,action){
    switch (action.type) {
        case types.CHANGE_TITLE:
            return{...state,title:"Geeks"}
        default: return state
    }
}
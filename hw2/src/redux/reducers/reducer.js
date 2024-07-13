import {combineReducers} from "redux";
import mainPageReducer from "./mainPageReducer";
import contactsPageReducer from "./contactsPageReducer";
import usersPageReducer from "./usersPageReducer";



export const rootReducer = combineReducers({
    mainPageReducer,contactsPageReducer,usersPageReducer
})


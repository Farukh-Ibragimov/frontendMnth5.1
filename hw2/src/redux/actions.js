import {types} from "./types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function asyncFunctionAction() {
    setTimeout(() => {
            alert("Hello")
        }, 2000
    )
}

function getUsersAction (users){
    return{
        type:types.USERS,
        payload:users
    }
}

export function fetchUsersAction(){
    return async function (dispatch){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

function getId(userId){
    return{
        type: types.USERS_ID,
        payload: userId
    }
}
export function getUsersIdAction(userId){
    return async function(dispatch){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{})
        const data = await response.json();
        dispatch(getId(data))
    }
}
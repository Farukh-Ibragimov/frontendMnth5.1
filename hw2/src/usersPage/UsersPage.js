import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction, getUsersIdAction} from "../redux/actions";
import UserCard from "../components/UserCard";

const UsersPage = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersPageReducer.users)
    const [idUser, setIdUser] = useState();
    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    const getUsersId = (userId) =>{
        setIdUser(userId)
        console.log(userId)
        dispatch(getUsersIdAction(userId))
    }
    return (
        <div>
            <button onClick={getUsers}>get users</button>
           <div style={{display:'flex',flexWrap:'wrap',columnGap:'15px'}}>
               {users && users.length > 0 && (
                   users.map(user => (
                       idUser === user.id ? (
                           <h1 style={{marginTop:"160px", width:"300px"}}>Пользователь №{user.id}</h1>
                       ) : (
                           <UserCard onClick={getUsersId} userInfo={user} key={user.id} />
                       )
                   ))
               )}
           </div>
        </div>

    );
}

export default UsersPage;
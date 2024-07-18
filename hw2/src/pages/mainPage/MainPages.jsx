import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsersAction, getUsersIdAction} from '../../redux/actions';
import UserCard from "../../components/UserCard";

const MainPage = () => {
    const users = useSelector(state => state.usersPageReducer.users)
    const dispatch = useDispatch();


    const getUser = () => {
        dispatch(fetchUsersAction());
    };

    return (
        <div >
            <button onClick={getUser}>Get Users</button>
                <div style={{display:'flex',flexWrap:'wrap',columnGap:'15px'}}>
                    {users ?
                        (users.map(user => (
                            <UserCard key={user.id} user={user}  />
                        ))) :  <div>Loading...</div>
                    }
                </div>
        </div>
    );
};

export default MainPage;
import React from 'react';
import {Link} from "react-router-dom";
import style from './usersPage.module.css'

const UserCard = ({ user}) => (

    <div className={style.block}>
        <Link to={`/users/${user.id}`} key={user.id}>
            <img style={{height:'100px',width:'100px'}} src="https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png" alt="avatar" />
            <div className="card">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        </Link>
    </div>
);

export default UserCard;

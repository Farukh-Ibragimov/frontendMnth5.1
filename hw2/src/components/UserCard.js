import React from 'react';
import style from './usersPage.module.css'
const  UserCard= ({userInfo,onClick}) =>{
    return (
        <div onClick={()=>onClick(userInfo.id)} className={style.block}>
            <img style={{height:'100px'}} src="https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png" alt="avatar" />
            <h1>{userInfo.name}</h1>
            <p className={style.caption}>{userInfo.username}</p>
            <p className={style.caption}>{userInfo.email}</p>
        </div>

    );
}

export default UserCard;
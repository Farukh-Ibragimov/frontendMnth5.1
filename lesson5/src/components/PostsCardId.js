import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUsersId} from "../store/PostSlice";
import style from './postsCard.module.css'

const PostsCardId=() =>{
    const post = useSelector(state => state.postsReducer.posts)
    const {id}= useParams()
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getUsersId(id))
    },[id])
    return (
        <div className={style.card}>
            <h3><span style={{color:'black'}}>id: </span> {post.id}</h3>
            <h3><span style={{color:'black'}}>title: </span> {post.title}</h3>
            <p><strong style={{color:'black'}}>description: </strong>{post.body}</p>
        </div>
    );
}

export default PostsCardId;
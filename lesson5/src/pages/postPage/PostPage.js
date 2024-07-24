import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/PostSlice";
import PostsCard from "../../components/PostsCard";
import {Spinner} from "react-bootstrap";

const PostPage=()=> {

    const {posts,preloader,message}= useSelector(state => state.postsReducer)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getPosts())
    },[])

    console.log(posts)

    return (
        <>{preloader ? <Spinner animation="grow" /> : message ? <p>{message}</p>
            :
            <div style={{display:'flex',flexWrap:'wrap',gap:'5px'}}>
                {posts.map((post,index)=> <PostsCard key={index} postInfo={post}/>)}
            </div>  }
        </>

    );
}

export default PostPage;
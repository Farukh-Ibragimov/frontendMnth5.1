import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../store/PostSlice";

const CreatePostPage=()=> {

    const message = useSelector(state => state.postsReducer.message)
    const [form,setForm]= useState({})
    const dispatch = useDispatch()
    const changeForm  = (e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const submit = (e)=>{
        e.preventDefault()
        dispatch(createPost(form))
    }
    return (
        <div>
            <form onSubmit={submit}  >
                <input  name="title" type="text" onChange={changeForm}/>
                <textarea name="body"  cols="30" rows="10" onChange={changeForm}></textarea>
                <button type="submit">create post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default CreatePostPage;
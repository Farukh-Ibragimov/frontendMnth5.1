import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (info, {dispatch}) {
        try {
            dispatch(preloaderOn())
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await response.json()
            dispatch(postsInfo(posts))
            if (response.status === 404) {
                dispatch(setMessage('404  NOT FOUND'))
            }
        } catch (e) {
            dispatch(setMessage(e))

        } finally {
            dispatch(preloaderOff())
        }
    }
)

export const  getUsersId= createAsyncThunk(
    'getUsersId',
 async function(userId,{dispatch}){
        try {
            dispatch(preloaderOn())
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            const data = await response.json();
            dispatch(getId(data))
            if (response.status === 404) {
                dispatch(setMessage('404  NOT FOUND'))
            }
        }catch (e) {
            dispatch(setMessage(e))
        }finally {
            dispatch(preloaderOff())
        }

}
)

export const createPost = createAsyncThunk(
    'createPost',
    async function (info, {dispatch}) {
        try {
            preloaderOn()
            const options = {
                method: 'POST',
                headers: {'Content-type': 'application.json'},
                body: JSON.stringify(info)
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
            if (response.status >= 200 && response.status >= 204) {
                dispatch(setMessage('Post created'))
            } else if (response.status === 404) {
                dispatch(setMessage('404  NOT FOUND'))
            }
        } catch (e) {
            dispatch(setMessage(e))
        } finally {
            dispatch(preloaderOff())
        }
    }
)


const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        preloader: false,
        message: ''
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload
        },
        preloaderOn: (state, action) => {
            state.preloader = true
        }, preloaderOff: (state, action) => {
            state.preloader = false
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        getId: (state, action) => {
            state.posts = action.payload

        }
    }
})


export const {postsInfo, preloaderOff, preloaderOn, setMessage,getId} = postSlice.actions
export default postSlice.reducer
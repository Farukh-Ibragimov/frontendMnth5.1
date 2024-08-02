import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todo: [],
        contact: [],
        number: [],
        post: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({id: Date.now(), text: action.payload, completed: false})
        },
        toggleTodo: (state, action) => {
            const todo = state.todo.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(todo => todo.id !== action.payload)
        }, addContact: (state, action) => {
            state.contact.push({id: Date.now(), name: action.payload.name, email: action.payload.email})
        },
        deleteContact: (state, action) => {
            state.contact = state.contact.filter(contact => contact.id !== action.payload)
        },
        editContact: (state, action) => {
            const contact = state.contact.find(contact => contact.id === action.payload.id);
            if (contact) {
                contact.name = action.payload.name;
                contact.email = action.payload.email;
            }
        },
        addNumber: (state, action) => {
            state.number.push({id: Date.now(), text: action.payload, completed: false})
        },
        toggleNumber: (state, action) => {
            const number = state.number.find(number => number.id === action.payload)
            if (number) {
                number.completed = !number.completed
            }
        },
        deleteNumber: (state, action) => {
            state.number = state.number.filter(number => number.id !== action.payload)
        },
        addPost: (state, action) => {
            state.post.push({id: Date.now(), title: action.payload, liked: false, image: action.payload})

        },
        toggleLiked: (state, action) => {
            const post = state.post.find(number => number.id === action.payload)
            if (post) {
                post.liked = !post.liked
            }
        },
        likedPost:(state)=>{
            state.post.filter(post => post.liked)
        }
    }
})


export const {
    addTodo,
    addPost,
    deleteNumber,
    toggleTodo,
    toggleNumber,
    deleteTodo,
    deleteContact,
    editContact,
    addContact,
    addNumber,
    toggleLiked
} = todoSlice.actions
export default todoSlice.reducer

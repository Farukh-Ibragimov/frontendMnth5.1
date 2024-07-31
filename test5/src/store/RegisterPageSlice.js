import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const registerPageSlice = createSlice({
    name: 'RegisterPageSlice',
    initialState: {
        persons: []
    },
    reducers: {
        getUserInfo: (state, action) => {
                state.persons.push(action.payload)
        }
    }
})


export const {getUserInfo} = registerPageSlice.actions
export default registerPageSlice.reducer
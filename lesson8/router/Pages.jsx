import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import FormPage from "../pages/FormPage.jsx";
import UsersPapge from "../pages/UsersPapge.jsx";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/formPage' element={<FormPage/>}/>
            <Route path='/usersPage' element={<UsersPapge/>}/>
        </Routes>
    );
};

export default Pages;
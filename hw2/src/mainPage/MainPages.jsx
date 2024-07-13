import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";
import {changeTitleAction} from "../redux/actions";

const MainPages = () => {
    const mainTitle = useSelector(state => state.mainPageReducer.title)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{mainTitle}</h1>
            <button onClick={()=>{dispatch(changeTitleAction())}}>change title</button>
        </div>
    );
}

export default MainPages;
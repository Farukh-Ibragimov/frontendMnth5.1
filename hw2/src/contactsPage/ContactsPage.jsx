import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const contactsPage=()=>{
    const [inputValue,setInputValue] = useState()
    const contactsTitle = useSelector(state => state.contactsPageReducer.title)
    const dispatch = useDispatch()
}
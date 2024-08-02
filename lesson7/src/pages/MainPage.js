import React, {useState} from 'react';
import {Button, Checkbox, Container, IconButton, List, ListItem, ListItemText, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, toggleTodo} from "../store/todoSlice";
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import Navigation    from "./navigation/Navigation";

const MainPage = () => {
    const [text, setText] = useState()
    const todos = useSelector(state => state.todoReducer.todo)
    const dispatch = useDispatch()


    const handleAddTodos = () => {
        if (text.trim()) {
            dispatch(addTodo(text))
            setText('')
        }
    }
    return (
        
        <Container>
            <Navigation/>
            <h1>Todo list</h1>
            <TextField
                label="New Todo"
                variant="outlined"
                value={text}
                onChange={e => setText(e.target.value)}
                fullWidth
                margin='normal'
            />
            <Button variant="contained" onClick={handleAddTodos}>Add Todo</Button>
            <List>
                {todos && todos.map(todo => (
                        <ListItem key={todo.id} devider>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                            />
                            <ListItemText
                            primary={todo.text} style={{textDecoration:todo.completed ? 'line-through' : 'none'}}
                            />
                            <IconButton edge="end" onClick={()=> dispatch(deleteTodo(todo.id))}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItem>
                    ))}
            </List>
        </Container>
    )
};

export default MainPage;
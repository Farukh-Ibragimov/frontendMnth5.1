import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Typography,
    Checkbox,
    IconButton
} from '@mui/material';
import Flag from 'react-world-flags';
import {useDispatch, useSelector} from "react-redux";
import {addNumber, deleteNumber, toggleNumber} from "../../store/todoSlice";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const PhoneNumbers=()=> {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const dispatch = useDispatch()
    const numbers = useSelector(state => state.todoReducer.number)


    const handleAddNumber = () => {
        if (isValid && phoneNumber) {
            dispatch(addNumber(phoneNumber))
            setPhoneNumber('');
            setIsValid(true);
        }
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        if (value.startsWith('+996')) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };


    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Phone Number
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {phoneNumber.startsWith('+996') && (
                    <Flag code="KG" style={{ width: '30px', height: '20px', marginRight: '10px' }} />
                )}
                <TextField
                    label="Enter Phone Number"
                    variant="outlined"
                    fullWidth
                    value={phoneNumber}
                    onChange={handleChange}
                    error={!isValid}
                    helperText={!isValid ? "Номер должен начинаться с +996" : ""}
                />
            </div>
            <Button variant="contained" color="primary" onClick={handleAddNumber} style={{ marginTop: '10px' }}>
                Add Phone Number
            </Button>
            <List>
                {numbers && numbers.map(number => (
                    <ListItem key={number.id} divider>
                        <Checkbox
                            checked={number.completed}
                            onChange={() => dispatch(toggleNumber(number.id))}
                        />
                        <ListItemText
                            primary={number.text} style={{textDecoration:number.completed ? 'line-through' : 'none'}}
                        />
                        <IconButton edge="end" onClick={()=> dispatch(deleteNumber(number.id))}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default PhoneNumbers;
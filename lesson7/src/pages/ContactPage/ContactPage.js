import React, {useState} from 'react';
import {
    Button,
    Container,
    Dialog, DialogActions, DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextField
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import {useDispatch, useSelector} from "react-redux";
import {addContact, deleteContact, deleteTodo, editContact} from "../../store/todoSlice";
import Navigation from "../navigation/Navigation";

const ContactPage = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [editId,setEditId] = useState(null)
    const [editName,setEditName]= useState('')
    const [editEmail,setEditEmail]= useState('')
    const [open, setOpen ]= useState(false)

    const contacts = useSelector(state => state.todoReducer.contact)
    const dispatch = useDispatch()

    const handleAddContact = ()=> {
        if (name.trim() && email.trim()){
            dispatch(addContact({name,email}))
            setName('')
            setEmail('')
        }
    }

    const handleEditContact = (contact)=>{
        setEditId(contact.id)
        setEditEmail(contact.email)
        setEditName(contact.name)
        setOpen(true)
    }
    const handleSaveEdit=()=>{
        dispatch(editContact({id:editId,name:editName,email:editEmail}))
        setOpen(false)
    }

    return (
        <Container>
            <Navigation/>
            <h1>Contacts</h1>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                margin="normal"

                onChange={e => setName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="outlined"
                value={email}
                fullWidth
                margin="normal"
                onChange={e => setEmail(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddContact}>Add contact</Button>
            <List>
                {contacts && contacts.map(contact => (
                    <ListItem key={contact.id} divider>
                        <ListItemText primary={contact.name} secondary={contact.email}/>
                        <IconButton edge="end" onClick={() => handleEditContact(contact)}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton edge="end" onClick={()=> dispatch(deleteContact(contact.id))}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Edit Contact</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={editName}
                        fullWidth
                        margin="normal"
                        onChange={e => setEditName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={editEmail}
                        margin="normal"
                        fullWidth
                        onChange={e => setEditEmail(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ContactPage;
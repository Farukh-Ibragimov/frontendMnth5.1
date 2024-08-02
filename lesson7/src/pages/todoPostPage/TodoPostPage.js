import React, {useState} from 'react';
import {
    Button,
    CardContent,
    Container,
    Input,
    TextField,
    Typography,
    Card,
    CardActions,
    List,
    ListItem,
    Checkbox
} from "@mui/material";
import {addContact, addPost} from "../../store/todoSlice";
import {useDispatch, useSelector} from "react-redux";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const TodoPostPage = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [showLikedPosts, setShowLikedPosts] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const posts = useSelector(state => state.todoReducer.post)

    const toggleLike = (id) => {
        dispatch(toggleLike(id))
    };
    const dispatch = useDispatch()

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);

        }
    };


    const handleAddPost = ()=> {
        if (title.trim() && content.trim()){
            dispatch(addPost({title,content,image}))
            setTitle('')
            setContent('')
            setImage(null)
        }
    }

    const likedPosts = posts.filter(post => post.liked);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Posts
            </Typography>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={title}
                margin="normal"
                onChange={e => setTitle(e.target.value)}
            />
            <TextField
                label="Caption"
                variant="outlined"
                value={content}
                fullWidth
                margin="normal"
                onChange={e => setContent(e.target.value)}
            />
            <Input
                accept="image/*"
                id="upload-image"
                type="file"
                onChange={handleImageChange}
                style={{display: 'none'}}
            />
            <label htmlFor="upload-image">
                <Button variant="contained" component="span" >
                    Загрузить изображение
                </Button>
            </label>

            <Button variant="contained" onClick={handleAddPost} style={{margin:'10px'}}>
                Добавить публикацию
            </Button>
            {image && <img src={image} alt="Preview" style={{width: '100%', marginBottom: '10px'}}/>
            }
            <Typography variant="h4" gutterBottom style={{marginTop: '20px'}}>
                Публикации
            </Typography>
            <List>
                {posts.map(post => (
                    <ListItem key={post.id}>
                        <Card variant="outlined" style={{width: '100%', marginBottom: '10px'}}>
                            <CardContent>
                                <Typography variant="h5">{post.title}</Typography>
                                <Typography variant="body2">{post.content}</Typography>
                                {post.image &&
                                    <img src={post.image} alt="Post" style={{width: '100%', marginTop: '10px'}}/>}
                                <Checkbox style={{marginTop:'10px'}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                <Checkbox
                                    {...label}
                                    icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />}
                                />

                            </CardContent>
                        </Card>

                    </ListItem>
                ))}
            </List>

            <Button
                variant="contained"
                onClick={() => setShowLikedPosts(!showLikedPosts)}
                style={{marginTop: '20px'}}
            >
                {showLikedPosts ? 'Скрыть понравившиеся публикации' : 'Показать понравившиеся публикации'}
            </Button>

            {showLikedPosts && (
                <div style={{marginTop: '20px'}}>
                    <Typography variant="h5">Понравившиеся публикации</Typography>
                    <List>
                        {likedPosts.length > 0 ? (
                            likedPosts.map(post => (
                                <ListItem key={post.id}>
                                    <Card variant="outlined" style={{width: '100%', marginBottom: '10px'}}>
                                        <CardContent>
                                            <Typography variant="h6">{post.title}</Typography>
                                            <Typography variant="body2">{post.content}</Typography>
                                            {post.image && <img src={post.image} alt="Post"
                                                                style={{width: '100%', marginTop: '10px'}}/>}
                                        </CardContent>
                                    </Card>

                                </ListItem>
                            ))
                        ) : (
                            <Typography variant="body2">Нет понравившихся публикаций.</Typography>
                        )}
                    </List>
                </div>
            )}
        </Container>
    );
};



export default TodoPostPage;
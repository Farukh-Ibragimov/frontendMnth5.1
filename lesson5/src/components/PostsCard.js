import React from "react";
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const PostsCard = ({postInfo}) => {

    return (
        <Card style={{width: '400px'}}>
            <Link to={`/posts/${postInfo.id}`} key={postInfo.id} style={{textDecoration:"none",color:'black',textAlign:'center'}}>
                <Card.Body>
                    <Card.Title>{postInfo.title}</Card.Title>
                    <Card.Text>{postInfo.body}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default PostsCard

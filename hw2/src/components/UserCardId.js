import React, {useEffect, useState} from 'react';
import style from './userCard.module.css'
import {useParams} from "react-router-dom";

const UserCardId = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams();
    const [showAddress, setShowAddress] = useState(false);
    const [showCompany,setShowCompany] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id]);

    const handleShowCompany = ()=>{
        setShowCompany(!showCompany)
    }
    const handleShowAddress = () => {
        setShowAddress(!showAddress);
    };


    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.card}>
            <img src="https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png" alt="user"/>
            <div>
                <p><strong>Name: </strong>{user.name}</p>
                <p><strong>Username: </strong>{user.username}</p>
                <p><strong>Email: </strong>{user.email}</p>
                <div className={style.address} >
                    <strong> Address:</strong>  <img onClick={handleShowAddress} src="data:image/png;base64,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" alt="address"/>
                    {showAddress && (
                        <div className={style.addressDeTails}>
                            <p><strong>Street:</strong>{user.address.street}</p>
                            <p><strong>Suite:</strong>{user.address.suite} </p>
                            <p><strong>City:</strong>{user.address.city} </p>
                            <p><strong>Zipcode:</strong>{user.address.zipcode}</p>
                            <p><strong>Geo:</strong>{user.address.geo.lat}, {user.address.geo.lng}</p>
                        </div>
                    )}
                </div>
                <p>&#128222;: {user.phone}</p>
                <div>
                    <strong>Company:</strong> <img onClick={handleShowCompany} src="data:image/png;base64,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" alt="company"/>
                    {showCompany && (
                        <div>
                            <p><strong>Name:</strong> {user.company.name}</p>
                            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                            <p><strong>BS:</strong> {user.company.bs}</p>
                        </div>
                    )}
                </div>
                <p><img src="data:image/png;base64,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" alt="website"/>:  {user.website}</p>
            </div>
        </div>

    );
};

export default UserCardId;
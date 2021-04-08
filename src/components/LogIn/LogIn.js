import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from './firebaseConfig';

const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleLogIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, photoURL, email } = result.user;
                const signInUser = { name: displayName, photoURL, email }
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }


    return (
        <div className="container text-center"><br />
            <button style={{ width: '20%' }} className="btn btn-outline-primary" onClick={handleGoogleLogIn}><img style={{ width: '20%', paddingRight: '20px' }} src="https://symbols-electrical.getvecta.com/stencil_82/45_google-icon.d8d982f8a1.svg" alt="" /> {newUser ? 'Log Out' : 'Log In to Google'} </button>
            <h4>Dear {loggedInUser}</h4>
        </div>
    );
};

export default LogIn;
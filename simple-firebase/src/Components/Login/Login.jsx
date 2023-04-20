import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
const Login = () => {
    const [user,setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const googleprovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result => {
            const loggedInuser = result.user;
            console.log(loggedInuser);
            setUser(loggedInuser);
        })
        .catch(error => {
            console.log('error',error.message);
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result => {
            const loggedInuser = result.user;
            console.log(loggedInuser);
            setUser(loggedInuser);
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        // user ? logout : signin
        <div>
            {
                user ?
                <button onClick={handleSignOut}>Log out</button> :
                <div>
                    <button onClick={handleGoogleSignIn}>Google login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </div>
            }
            {
                user && <div>
                user: {user.displayName}
                <p>email:{user.email}</p>
                <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;
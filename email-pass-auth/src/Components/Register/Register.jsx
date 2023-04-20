import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
const auth = getAuth(app);
const Register = () => {
    const [email,setEmail] = useState('');
    const [error,seterror] = useState('');
    const [success,setSucces] = useState('');

    const handleSubmit = (event) =>{
        //1.prevent page refresh
          event.preventDefault();
          setSucces('');
          seterror('');
          //2.collect user email and password
          const email = event.target.email.value;
          const password = event.target.password.value;
          const name =  event.target.name.value;
          console.log(event.target.email.value);
          console.log(event.target.password.value);
          console.log(name);
          //validate
          if(!/(?=.*[A-Z])/.test(password)){
            seterror('Please add at least one uppercase');
            return;
          }
          else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            seterror('Please add at least two numbers')
            return;
          }
          else if(password.length<6){
            seterror('Please add at least 6 characters in your password')
            return;
          }
          //3.create user in firebase
          createUserWithEmailAndPassword(auth,email,password)
          .then(result => {
              const logggeduser = result.user;
              console.log(logggeduser);
              seterror('');
              event.target.reset();
              setSucces('User has created successfully');
              sendVerificationEmail(result.user);
              updateUserData(result.user, name);
          })
          .catch(error =>{
            console.log(error.message);
            seterror(error.message);
          })
    }
    const sendVerificationEmail = (user) =>{
          sendEmailVerification(user)
          .then(result => {
            console.log(result);
            alert('Please verify your email address');
          }) 
    }
    const updateUserData = (user, name) => {
      updateProfile(user, {
          displayName: name
      })
          .then(() => {
              console.log('user name updated')
          })
          .catch(error => {
              setError(error.message);
          })
  }
    const handleEmailChange = (event) =>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) =>{
        console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2'  type="text" name="name" id="name" placeholder='Your name' required/>
                <br></br>
                <input className='w-50 mb-4 rounded ps-2'  onChange={handleEmailChange}type="email" name="email" id="email" placeholder='Your Email' required/>
                <br></br>
                <input className='w-50 mb-4 rounded ps-2'  onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder="Your Password" required/>
                <br></br>
                <input className='btn btn-primary'  type="submit" value="Register" />
            </form>
            <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;
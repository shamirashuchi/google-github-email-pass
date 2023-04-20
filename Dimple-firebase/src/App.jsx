import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
function App() {
  const [user,setUser] = useState(null);
  const handlegooglesignin = () =>{
       signInWithPopup(auth, googleprovider)
       .then(result =>{
        const loggeduser = result.user;
        console.log(loggeduser);
        setUser(loggeduser);
       })
       .catch(error =>{
        console.log(error);
       })
  }

  return (
    <div className="App">
      <h1>Firebase + React</h1>
      <button onClick={handlegooglesignin}>Google Sign In</button>
      {
         user &&
         <div className="card">
         <h4>User: {user.displayName}</h4>
         </div>
      }
    </div>
  )
}

export default App

import React from 'react'
import "./signInBtn.css"
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { auth } from './App'
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
function SignIn() {
    function signInWithGoogle()
    {
        const provider= new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    
  return (
    <>
    <button onClick={signInWithGoogle} className="signInBtn">Sign In with google</button>
    </>
  )
}

export default SignIn
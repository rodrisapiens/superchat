import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { auth } from './App'
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
function SignOut() {
    function signOut()
    {
        auth.signOut();
    }
  return (
    <button onClick={signOut}>Sign Out</button>
  )
}

export default SignOut
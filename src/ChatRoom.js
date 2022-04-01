import React,{useEffect, useRef, useState} from 'react'
import firebase from 'firebase/compat/app'
import ChatMsg from './ChatMsg'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { auth } from './App'
import { firestore } from './App'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignOut from './SignOut'
function ChatRoom() {

    const dummy =useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue,setFormValue]=useState('');
    useEffect(() => {
        dummy.current.scrollIntoView({behavior:'smooth'});
    }, [messages])
    
    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid,photoURL} = auth.currentUser;

        await messagesRef.add({
            text:formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
        setFormValue('');
    }
    return (
        <div className='chatRoom'>
            <main>
               <p>{messages&&messages.map(msg=><ChatMsg key={msg.id} msg={msg}/>)}</p>
               <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage}>
                <input type={'text'} value={formValue} onChange={(e)=>{setFormValue(e.currentTarget.value)}}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ChatRoom
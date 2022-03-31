import React,{useEffect} from 'react'
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

    
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    return (
        <div className='chatRoom'>
            <SignOut />
            <h1>Chat Room</h1>
            <div className="chats">
               <p>{messages&&messages.map(msg=><ChatMsg key={msg.id} msg={msg}/>)}</p>
            </div>
        </div>
    )
}

export default ChatRoom
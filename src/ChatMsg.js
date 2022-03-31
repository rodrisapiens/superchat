import React, { useEffect } from 'react'
import { auth } from './App';

function ChatMsg({ msg }) {
    const { text, uid, photoURL } = msg;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`} >
            <img src={photoURL} alt="" />
            <p>{text}</p>
        </div>

    )
}

export default ChatMsg
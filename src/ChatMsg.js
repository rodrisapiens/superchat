import React,{useEffect} from 'react'

function ChatMsg({msg}) {
        const {text,uid}=msg;
  return (
    <p>{text}</p>
  )
}

export default ChatMsg
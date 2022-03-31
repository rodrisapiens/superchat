import React,{useEffect} from 'react'

function ChatMsg({msg}) {
    useEffect(() => {
        const {text,uid}=msg;
        console.log(msg)
    }, [])
  return (
    <p>text</p>
  )
}

export default ChatMsg
import React from 'react'
import {useState} from 'react'

const ChatInput = ({sendMessage}) => {
  const[val,setVal]=useState("")
  
  const handlesubmit=()=>{
    if(val=="")return;
    sendMessage({sender:"user",message:val})
    setVal("")
  }

  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4
    py-4 overflow-auto relative">

      <textarea 
      rows={1}  
      className="border-0 bg-transparent outline-none w-11/12"
      value={val}
      type="text"
      onChange={(e)=>setVal(e.target.value)}
      />

      <img 
       onClick={handlesubmit}
       width={20} src="./send.png" alt="send-button"  className="absolute top-4
        right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125
        "/>

    </div>
  )
}

export default ChatInput

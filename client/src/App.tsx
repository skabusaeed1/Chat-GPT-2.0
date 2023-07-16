import ChatBody from './components/ChatBody';
import ChatInput from './components/ChatInput';
import {useState} from "react"

function App() {
  const [chat,setChat]=useState([])

  const sendMessage=async(message)=>{
    await Promise.resolve(setChat((prev) => [...prev,message]));
  }

  return (
   <div className='bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle'>

    <div className='gradient-01 z-0 absolute'></div>
    <div className='gradient-02 z-0 absolute'></div>

    <div className='uppercase text-center font-bold text-2xl'>chatgpt2.0</div>



    <div className='h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center'><ChatBody chat={chat}/></div>


    <div className="w-full max-w-4xl min-w-[20rem] self-center">
      <ChatInput sendMessage={sendMessage}/>
      </div>
   </div>
  )
}

export default App

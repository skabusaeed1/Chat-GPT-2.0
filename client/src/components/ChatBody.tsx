import React from 'react'

const ChatBody = ({chat}) => {
    const aistyle= "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";
  return (
    <div>
      <div className="flex flex-col gap-4">

      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
              message.sender === "ai" && aistyle  
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}
        {/* <div className='border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
            <pre className='whitespaces-pre-wrap'>
                <span>Hey GPT, can you help me? </span>
            </pre>
        </div> */}

        {/* <div className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${aistyle}`}>
            <pre>
                <span>Yeah, I can help you anytime.</span>
            </pre>
        </div> */}
      </div>
    </div>
  )
}

export default ChatBody

/* eslint-disable no-unused-vars */
import { useAuthContext } from "../../context/AutheContext"
import { extractTime } from "../../utils/extractTime"
import useConversation from "../../zustand/useConversation"


const Message = ({message}) => {
    const {authUser} = useAuthContext()
    const {selectedConversation} = useConversation()
    const fromMe = message.senderId === authUser._id
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : "";

    const formatedDate = extractTime(message.createdAt)
    

  return (
    <div className={`chat ${chatClassName}`} >
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="Tailwindcss chat bubble component" />

            </div>

        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
            {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
            {formatedDate}
        </div>

    </div>
  )
}

export default Message

// /* eslint-disable no-unused-vars */
// import { useAuthContext } from "../../context/AutheContext"
// import { extractTime } from "../../utils/extractTime"
// import useConversation from "../../zustand/useConversation"


// const Message = ({message}) => {
//     const {authUser} = useAuthContext()
//     const {selectedConversation} = useConversation()
//     const fromMe = message.senderId === authUser._id
//     const chatClassName = fromMe ? 'chat-end' : 'chat-start'
//     const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
//     const bubbleBgColor = fromMe ? 'bg-blue-500' : "";

//     const formatedDate = extractTime(message.createdAt)
    

//   return (
//     <div className={`chat ${chatClassName}`} >
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img src={profilePic} alt="Tailwindcss chat bubble component" />

//             </div>

//         </div>
//         <div className={`chat-bubble text-white ${bubbleBgColor}`}>
//             {message.message}
//         </div>
//         <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
//             {formatedDate}
//         </div>

//     </div>
//   )
// }

// export default Message
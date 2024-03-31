import Conversation from "../models/conversation.moodel.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        console.log(senderId);

        console.log(senderId);

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //SOCKET IO FUnctionality here

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage);

    } catch (error) {
        console.log('Error in sendmessage controller', error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatID } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatID] },
        }).populate("messages"); //not reference but actual messages

        if (!conversation) {
            return res.status(200).json([])
        }
        const messages = conversation.messages
        res.status(200).json(messages)

    } catch (error) {
        console.log('Error in getmessage controller', error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}
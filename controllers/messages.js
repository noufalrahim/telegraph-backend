import Messages from '../models/messages.js';

const createMessage = async (req, res) => {
    try {
        const newMessage = req.body;
        const message = new Messages(newMessage);
        await message.save();
        res.status(201).json(message);
        console.log(message);
        console.log("Message Created");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getMessages = async (req, res) => {
    try {
        const messages = await Messages.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export { createMessage, getMessages };
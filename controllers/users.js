import Users from '../models/users.js';

const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new Users(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
        console.log(newUser);
        console.log("User Created");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    const userid = req.params.userid;
    try {
        await Users.deleteOne({ _id: userid });
        res.status(200).json({ message: "success" });
        console.log("User Deleted");
    } catch (error) {
        res.status(404).json({ message: "failed" });
        console.log("Couldnot delete user");
    }
}

export { createUser, getUsers, deleteUser };
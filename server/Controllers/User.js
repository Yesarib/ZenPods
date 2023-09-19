const User = require('../Models/Users.js');
const createError = require('http-errors')


const getUserById = async(req,res,next) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);
        if(!user) throw createError[404]('No user');

        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}

const subscription = async(req,res,next) => {
    try {
        const { subscriptionToUserId } = req.params
        const { userId } = req.body;

        const subscriptionToUser = await User.findById(subscriptionToUserId);
        if(!subscriptionToUser) throw createError.NotFound('User not found');

        const user = await User.findById(userId);

        if (user.subs.includes(subscriptionToUserId)) {
            return res.status(400).json({ message: 'Already sub' });
        }

        user.subs.push(subscriptionToUserId);
        
        res.status(201).json(user);
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { firstName, lastName } = req.body;

        const user = await User.findById(userId);
        if (!user) throw createError(404, 'No user');
    
        if (req.file) {
            const profileImageBuffer = req.file.filename;
            user.profileImage = profileImageBuffer;
        }
        if (firstName !== undefined && firstName !== null && firstName !== "") {
            user.firstName = firstName;
        }
        if (lastName !== lastName && lastName !== null && lastName !== "") {
            user.lastName = lastName;
        }
        await user.save();
    
        res.status(200).json({ message: "User updated successfully", user });
    
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUserById,
    updateUser,
    subscription
}
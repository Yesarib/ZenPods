const UserPlaylist = require('../Models/UserPlaylist.js');
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
        user.save();
        
        res.status(201).json(user);
    } catch (error) {
        next(error)
    }
}

const getSubscription = async(req,res,next) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);

        if (!user) throw createError.NotFound('User not found');

        res.status(200).json(user.subs);
    } catch (error) {
        next(error)
    }
}

const getSubscriber = async(req,res,next) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);

        if (!user) throw createError.NotFound('User not found');

        res.status(200).json(user.subscribers);

    } catch (error) {
        next(error)
    }-
}

const addPlaylist = async(req,res,next) => {
    try {
        const { playlistId } = req.params;
        const { userId } = req.body;

        const playlist = await UserPlaylist.findById(playlistId)
        const user = await User.findById(userId);

        if (!playlist && !user ) throw createError.NotFound('No user or playlist');

        user.playlist.push(playlistId);
        user.save();
        
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}

const removePlaylist = async(req,res,next) => {
    try {
        const { playlistId } = req.params;
        const { userId } = req.body;
        console.log(userId);

        const user = await User.findById(userId);
        if (!user ) throw createError.NotFound('No user or playlist');

        user.playlist.pop(playlistId);
        user.save();

        res.status(200).json(user)
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
    addPlaylist,
    removePlaylist,
    subscription,
    getSubscriber,
    getSubscription,
}
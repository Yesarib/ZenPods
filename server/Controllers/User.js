const User = require('../Models/Users.js');
const createError = require('http-errors')

const getUserById = async(req,res,next) => {
    try {
        const { userId } = req.body;

        const user = await User.findById(userId);
        if(!user) throw createError[404]('No user');

        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}


const updateUser = async(req,res,next) => {
    try {
        const { userId } = req.params.userId;
        const { profileImage, firstName, lastName } = req.body;

        const user = await User.findById(userId);
        if(!user) throw createError[404]('No user');

        if (profileImage !== undefined && profileImage !== null && profileImage !== "") {
            playlist.profileImage = profileImage;
        }
        if (firstName !== undefined && firstName !== null && firstName !== "") {
            playlist.firstName = firstName;
        }
        if (lastName !== lastName && lastName !== null && lastName !== "") {
            playlist.imageUrl = imageUrl;
        }

        await user.save();

        res.status(200).json({message:"User updated successfuly", user});

    } catch (error) {
        next(error)
    }
}


module.exports = {
    getUserById,
    updateUser,
}
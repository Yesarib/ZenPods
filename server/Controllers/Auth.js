const User = require('../Models/Users.js')
const { signAccessToken, signRefreshToken } = require('../Helpers/JWT.js')

const createError = require("http-errors")

const SignIn = async(req,res,next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email: email})

        if (!user) throw createError.NotFound("User not found")

        const isMatch = user.isValidPassword(password)
        if (!isMatch) throw createError.Unauthorized('Username or password is not valid');

        const accessToken = await signAccessToken(user.id)
        const refreshToken = await signRefreshToken(user.id)

        res.send({accessToken,refreshToken})

    } catch (error) {
        next(error)
    }
}

const SignUp = async(req,res,next ) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const doesExist = await User.findOne({ email:email})        
        if (doesExist) throw createError.Conflict(`${email} is already been registered.`)

        const user = new User({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
        });

        const savedUser = await user.save();
        const accessToken = await signAccessToken(savedUser.id)
        const refreshToken = await signRefreshToken(savedUser.id)
        res.send({accessToken,refreshToken})
    } catch (error) {
        next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.payload.userId);
        console.log(user);
        if (!user) throw createError[404]("Not Found");

        // Yeni bir access token üret ve kullanıcı verilerini döndür
        const newAccessToken = await signAccessToken(user.id);
        res.json({
            accessToken: newAccessToken,
            user
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    SignIn,
    SignUp,
    getUser
}
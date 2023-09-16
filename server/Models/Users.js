const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName : {
        type: String,
        required : true,
    },
    lastName : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
        lowercase : true,
        unique: true,
    },
    password : {
        type: String,
        required : true,
    },
    podcasts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast'
    }],
    subs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast'
    }],
    profileImage: {
        type:String,
        default:"https://www.vhv.rs/dpng/d/555-5558210_z-letter-png-logo-transparent-png.png"
    },
    notifications: Boolean
})

UserSchema.pre('save', async function(next)  {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})

UserSchema.methods.isValidPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}

const User = mongoose.model('User',UserSchema)
module.exports = User

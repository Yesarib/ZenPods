const JWT = require('jsonwebtoken')
const createError = require("http-errors")


module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {
                userId,
            }
            const secret = process.env.ACCESS_TOKEN_SECRET
            const options = {
                expiresIn: "1y",
                issuer: "pickurpage.com",
                audience: userId
            }
            JWT.sign(payload,secret,options, (err, token) => {
                if (err) return reject(err)
                resolve(token)
            })
        })
    },
    verifyAccessToken : (req,res,next) => {
        if (!req.headers['authorization']) return next(createError.Unauthorized())

        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        JWT.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
                return next(createError.Unauthorized(message))
            }
            req.payload = payload
            next()
        })
    },
    signRefreshToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {
                userId,
            }
            const secret = process.env.REFRESH_TOKEN_SECRET
            const options = {
                expiresIn: "1y",
                issuer: "pickurpage.com",
                audience: userId
            }
            JWT.sign(payload,secret,options, (err, token) => {
                if (err) return reject(err)
                resolve(token)
            })
        })
    }
}
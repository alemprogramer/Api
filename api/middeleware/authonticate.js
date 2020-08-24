const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'Secret_key')
        req.user = decode
        next()
    } catch (error) {
        res.json({
            message: "Authentication Failed"
        })
    }
}
module.exports = authenticate
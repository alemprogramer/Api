const User = require('../model/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getAllUserCon = (req, res, next) => {
    User.find()
        .then(data => {
            res.status(200).json({
                msg: "you hit it",
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: " somthing is worng",
                error: err
            })
        })
}
const postUserCon = (req, res, naxt) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.json({
                error: err
            })
        }
        const user = new User({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: hash
        })

        user.save()
            .then(data => {
                res.json({
                    msg: "add user  successfuly",
                    hash,
                    password: req.body.password
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: " somthing is worng",
                    error: err
                })
            })


    })

}
const checkPass = (req, res, next) => {

    let email = req.body.email
    let password = req.body.password

    User.findOne({ email })
        .then(data => {
            if (data) {
                bcrypt.compare(password, data.password, (err, result) => {
                    if (err) {
                        res.status(500).json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({email:data.email, _id : data._id, },'Secret_key',
                        {expiresIn: '7d'})
                        res.json({
                            msg: "login",
                            token
                        })
                    } else {
                        res.json({
                            msg: "Password doesn\'t match"
                        })
                    }
                })
            } else {
                res.json({
                    msg: "Incurect email"
                })
            }
        })
        .catch(err => {
            res.json({
                error: err
            })
        })
}


const getSingleUser = (req, res, next) => {
    let id = req.params.id
    User.findById(id)
        .then(data => {
            res.json({
                data
            })
        })
        .catch(err => {
            res.json({ error: err })
        })
}
const deleteUser = (req, res, next) => {
    let id = req.params.id
    User.findByIdAndDelete(id)
        .then(data => {
            res.json({
                msg: 'Deleted ' + data.name + ' account',
                //data: data.name
            })
        })
        .catch(err => {
            res.json({
                error: err
            })
        })
}
module.exports = {
    getAllUserCon,
    postUserCon,
    getSingleUser,
    checkPass,
    deleteUser
}
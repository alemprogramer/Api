const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema
const UserSchema = new Schema({

    name:{
        type:String,
        required: true,
        trim: true,
        minlength:3

    },
    phone:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    email:{
        type:String,
        trim: true,
        validate:{
            validator:(v)=>{
                return validator.isEmail(v)

            },
            message:`{VALUE} is not an email.`
        }
    },
    password:{
        type:String,
        required:true,

    }

})

const User = mongoose.model('User',UserSchema)

module.exports = User
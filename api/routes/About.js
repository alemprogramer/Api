const express=require('express')
const router = express.Router()


router.get('/', (req,res,next)=>{
    res.status(300).json({
            message : 'thsi is  a about page',
            about:'this is company about'
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
// const Contact = require("../model/contactsModel")
// const contact = require('../model/contactsModel')
const contactController =require('../controllers/contactCorntroller')

router.get('/',contactController.getContractControllers)
router.post('/',contactController.postAllContactControllers)
router.get('/:id',contactController.getSingleContacr)
router.delete('/:id',contactController.deleteContact)
router.put('/:id',contactController.updateContact)

module.exports = router












//const arr = []

// router.get('/', (req, res, next) => {
//        res.status(200).json({
//               arr
//        })
// })

// router.get('/:id', (req, res, next) => {
//        const id = req.params.id
//        res.status(201).json({
//               id
//        })
// })
// router.post('/', (req, res, next) => {
//        arr.push({
//               name:req.body.name,
//               email:req.body.email
//        })


//        console.log(arr);
//        res.status(201).json({
//               msg: 'data send'

//        })
// })
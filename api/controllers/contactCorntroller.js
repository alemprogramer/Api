const Contact = require("../model/contactsModel")

const getContractControllers = (req, res, next) => {
    Contact.find()
        .then(data => {
            res.status(200).json({
                msg: "All Contact .",
                data,

            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                msg: "Somethig was wrong."

            })
        })
}

const postAllContactControllers = (req, res, nexr) => {
    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })
    contact.save()
        .then(data => {
            res.status(201).json({
                message: "Contact add successfuly",
                data

            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                msg: "Somethig was wrong.",
                error: err




            })
        })

}

const getSingleContacr = (req, res, next) => {
    let id = req.params.id
    //console.log(id)
    //next()
    Contact.findById(id)
        .then(data => {
            res.status(300).json({
                data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                msg: "Somethig was wrong.",
                error: err
            })
        })
}
const deleteContact = (req, res, next) => {
    let id = req.params.id
    Contact.findByIdAndDelete(id)
        .then(data => {
            res.json({
                msg: 'Deleted ' + data.name + ' account',
                data: data.name
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                msg: "somethig is wrong",
                error: err
            })
        })
}
const updateContact = (req, res, next) => {
    let id = req.params.id
    let update = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }
    Contact.findByIdAndUpdate(id,{$set:update})
    .then(data=>{
        Contact.findById(id)
        .then(updData=>{
            res.json({
                msg:"Update",
                updData
            })
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"error",
            error:err
        })
    })
}

module.exports = {
    getContractControllers,
    postAllContactControllers,
    getSingleContacr,
    deleteContact,
    updateContact
}
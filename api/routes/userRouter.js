const express = require('express')
const router = express.Router()
const allUserControllers= require('../controllers/userController')
const athonticate = require('../middeleware/authonticate')


router.get('/',athonticate,allUserControllers.getAllUserCon)
router.post('/',allUserControllers.postUserCon)
router.get('/:id',allUserControllers.getSingleUser)
router.post('/login',allUserControllers.checkPass)
router.delete('/:id',allUserControllers.deleteUser)


module.exports = router
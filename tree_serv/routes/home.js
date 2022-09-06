const express = require('express')
const router = express.Router()
const questController = require('../controllers/quest')

router.get('/', questController.getIndex) 

router.get('/trees', questController.getTree) //should return json

router.post('/create-tree', questController.createTree)

// router.put('/update-tree', questController.updateTree)

// router.delete('/delete-tree', questController.deleteTree)

module.exports = router
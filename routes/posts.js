var express = require('express')
const { index, store, show } = require('../controllers/posts')
var router = express.Router()

router.get('/', index)
router.post('/', store)
router.get('/:id', show)

module.exports = router

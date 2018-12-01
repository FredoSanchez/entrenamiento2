var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', UserController.getAll);

router.get('/:id', UserController.getOne);

router.post('/', UserController.insert);

router.put('/:id', UserController.update);

router.delete(':id', UserController.delete);

module.exports = router;

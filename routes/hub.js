// imports
var express = require('express');
var router = express.Router();

// controllers
var formController = require('../controllers/form-controller');

// add cases
router.get('/', formController.get_form);
router.post('/', formController.post_form);

// export
module.exports = router;
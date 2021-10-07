var express = require('express');
var router = express.Router();
const housesCtrl = require('../controllers/houses');


router.get('/', housesCtrl.index);
router.get('/new', housesCtrl.new);
router.get('/:id', housesCtrl.show);
router.post('/', housesCtrl.create);


module.exports = router;



const router = require('express').Router();
const {getStores, addStores} = require('../controllers/stores');
router.route('/stores').get(getStores).post(addStores);
module.exports = router;

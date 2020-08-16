const router = require('express').Router();
const {getStores} = require('../controllers/stores');
router.get('/stores', getStores);
module.exports = router;

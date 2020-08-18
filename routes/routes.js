const router = require('express').Router();
const {getStores, addStores} = require('../controllers/stores');
const {addCity} = require('../controllers/city');
const {addProvince, getProvinceById} = require('../controllers/province');
router.route('/stores').get(getStores).post(addStores);
router.route('/city').post(addCity);
router.route('/province').post(addProvince);
router.route('/province/:id').get(getProvinceById);
module.exports = router;

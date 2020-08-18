const City = require('../models/City');
exports.addCity = async (req, res, next) => {
    try{
        const store = await City.create(req.body);
        return res.json({
            success: true,
            data: store
        });
    }catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

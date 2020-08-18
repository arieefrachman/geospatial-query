const Province = require('../models/Province');

exports.addProvince = async (req, res, next) => {
    try{
        const store = await Province.create(req.body);
        return res.json({
            success: true,
            data: store
        });
    }catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

exports.getProvinceById = async (req, res, next) => {
    try{
        const province = await Province.find({id: req.params.id});
        return res.json(province);
    }catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

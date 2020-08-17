const Store = require('../models/Store');

exports.getStores = async (req, res, next) => {
    try{
        const store = await Store.find();

        return res.json({
            success: true,
            count: store.length,
            data: store
        });
    }catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

exports.addStores = async (req, res, next) => {
    try{
        const store = await Store.create(req.body);
        return res.json({
            success: true,
            data: store
        });
    }catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

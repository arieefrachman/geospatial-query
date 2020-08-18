const mongoose = require('mongoose');

const ProvinceSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['MultiPolygon'],
        required: true
    },
    coordinates: [[[[Number]]]],
    id: Number,
    id_provinsi: Number,
    kemendagri_kode: String,
    kemendagri_nama: String,
    bps_kode: Number,
    bps_nama: String
});

module.exports = mongoose.model('province', ProvinceSchema);

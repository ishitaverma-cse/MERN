const mongoose = require('mongoose');
const { schema } = mongoose;

const productSchema = new schema({
    autoId: {type: Number, default: 0},
    name: {type: String, default: "", required: true},
    price: {type: Number, default: 0, required: true},
    description: {type: String, default: "", }
})


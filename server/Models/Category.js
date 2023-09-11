const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    color :{
        type:String,
        default:"black"
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

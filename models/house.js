const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    description: String,
    name: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const houseSchema =  mongoose.Schema ({
    address: String,
    bedrooms: Number,
    bathrooms: Number,
    squarefeet: Number,
    reviews: [reviewSchema],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   
});

module.exports = mongoose.model('House', houseSchema);
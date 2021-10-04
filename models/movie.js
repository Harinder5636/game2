const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    description: String,
    name: String,
})

const movieSchema = new mongoose.Schema ({
    userRecommending: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    plot: String,
    catagory: String,
    review: [reviewSchema],
   
});

module.exports = mongoose.model('Movie', movieSchema)
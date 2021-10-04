const mongoose = require('mongoose');

// Create your User Model
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
});
// need to have a googleId on my userSchema
module.exports = mongoose.model('customer', customerSchema);

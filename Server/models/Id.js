var mongoose = require('mongoose');

// Create the MovieSchema.
var IdSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    }
});

// Export the model schema.
module.exports = IdSchema;
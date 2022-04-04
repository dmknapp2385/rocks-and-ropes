const { Schema, model } = require('mongoose');

const freeWeightSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

const FreeWeight = model('FreeWeight', freeWeightSchema);

module.exports = FreeWeight;
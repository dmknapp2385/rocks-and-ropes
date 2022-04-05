const { Schema } = require('mongoose');

const activitySchema = new Schema({
  day: {
    type: Date,
    required: true
  },
  length: {
    type: String
  },
  name: {
    type: String,
    required: 'Please enter a name'
  },
  note: {
    type: String
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  link: {
    type: String
  }
});

module.exports = activitySchema;

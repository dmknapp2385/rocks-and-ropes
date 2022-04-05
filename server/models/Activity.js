const { Schema } = require('mongoose');

const activitySchema = new Schema({
  day: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: 'Please enter a name'
  },
  note: {
    type: String
  },
  sets: {
    type: Number,
    required: true
  },
  link: {
    type: String
  }
});

module.exports = activitySchema;

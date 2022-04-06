const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
  day: {
    type: String,
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
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// const Activity = model('Activity', activitySchema);

module.exports = activitySchema;

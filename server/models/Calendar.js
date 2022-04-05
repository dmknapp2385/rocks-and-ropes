const { Schema, model } = require('mongoose');
const activitySchema = require('./Activity');

const calendarSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  activity: [activitySchema]
});

const Calendar = model('Calendar', calendarSchema);

module.exports = Calendar;
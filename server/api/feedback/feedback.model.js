'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
  time: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('feedbacks', FeedbackSchema);

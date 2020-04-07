const mongoose = require('mongoose');

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Enter a username'
  }
});
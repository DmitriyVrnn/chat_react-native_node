import User from './user.interface';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  username: {
    type: String,
    required: 'Enter a username'
  },
  password: {
    type: String,
  }
});

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);
export default userModel;
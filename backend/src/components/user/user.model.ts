import User from './user.interface';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  email: {
    type: String,
    required: 'Enter a email',
  },
  password: {
    type: String,
  },
});

const userModel = mongoose.model<User & mongoose.Document>('users', userSchema);
export default userModel;

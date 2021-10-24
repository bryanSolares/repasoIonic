import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  name: { type: String, required: [true, 'Required Name'] },
  avatar: { type: String, default: 'av-1.png' },
  email: { type: String, unique: true, required: [true, 'Required Email'] },
  password: { type: String, required: [true, 'Required Password'] },
});

userSchema.method('comparePassword', function (password) {
  if (bcrypt.compareSync(password, this.password)) {
    return true;
  }

  return false;
});

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  comparePassword(password: string): boolean;
}

export const User = model<IUser>('User', userSchema);

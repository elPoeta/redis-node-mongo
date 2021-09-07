import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  nickName: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  nickName: {
    type: String,
    required: true,
    unique: true,
    minlength: 8
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
    trim: true
  },
}, {
  timestamps: true,
});

userSchema.methods.matchPassword = async function (enteredPassword): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next): Promise<void> {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model<IUser>('User', userSchema);
export default User
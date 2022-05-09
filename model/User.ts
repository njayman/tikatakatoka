import { Schema, model } from "mongoose";
import { User } from "../interfacentypes/User";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    emote: { type: String },
  },
  { timestamps: true }
);

const UserModel = model<User>("User", UserSchema);
export default UserModel;

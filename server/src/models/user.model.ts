import mongoose from "mongoose";
import * as bcrypt from "bcryptjs";
import { IUser } from "#/@types/user.types";

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Your password must be longer than 6 characters"],
      select: false,
    },
    avatar: String,
    phoneNo: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
      enum: {
        values: ["user", "admin"],
        message: "Please select correct role for user",
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;

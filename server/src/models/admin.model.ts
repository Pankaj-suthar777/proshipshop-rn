import mongoose from "mongoose";
import * as bcrypt from "bcryptjs";
import { IAdminUser } from "#/@types/user.types";

const adminSchema = new mongoose.Schema<IAdminUser>(
  {
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
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Admin = mongoose.model<IAdminUser>("AdminUser", adminSchema);
export default Admin;

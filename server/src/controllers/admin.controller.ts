import catchAsyncErrors from "#/middlewares/catchAsyncErrors";
import Admin from "#/models/admin.model";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Response } from "express";

export const adminLogin = catchAsyncErrors(
  async (email: string, password: string, res: Response) => {
    const user = await Admin.findOne({ email }).select("+password");
    if (!user) {
      throw new Error("Invalid Email or Password");
    }

    const isPasswordMatched = await bcrypt.compare(password, user?.password);

    if (!isPasswordMatched) {
      throw new Error("Invalid Email or Password");
    }

    const token = jwt.sign({ _id: user?._id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: Number(process.env.COOKIE_EXPIRES_IN!) * 24 * 60 * 60 * 1000,
    });

    return {
      token,
      user_info: user,
    };
  }
);

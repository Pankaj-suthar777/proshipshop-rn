import { IUser, UserInput } from "#/@types/user.types";
import { adminLogin } from "#/controllers/admin.controller";
import {
  deleteUser,
  getAllUsers,
  login,
  registerUser,
  updatePassword,
  updateUserProfile,
  uploadUserAvatar,
} from "#/controllers/user.controller";
import { Response } from "express";

export const userResolvers = {
  Query: {
    getAllUsers: async (
      _: any,
      { page, query }: { page: number; query: string }
    ) => getAllUsers(page, query),
    me: async (_: any, __: any, { user }: { user: IUser }) => {
      return user;
    },
    logout: async (_: any, __: any, { res }: { res: Response }) => {
      res.cookie("token", null, { maxAge: 0 });
      return true;
    },
  },
  Mutation: {
    registerUser: async (_: any, { userInput }: { userInput: UserInput }) => {
      return registerUser(userInput);
    },

    login: async (
      _: any,
      { email, password }: { email: string; password: string },
      { res }: { res: Response }
    ) => {
      return login(email, password, res);
    },
    adminLogin: async (
      _: any,
      { email, password }: { email: string; password: string },
      { res }: { res: Response }
    ) => {
      return adminLogin(email, password, res);
    },
    updateUserProfile: async (
      _: any,
      { userInput }: { userInput: Partial<UserInput> },
      { user }: { user: IUser }
    ) => updateUserProfile(userInput, user._id),
    updatePassword: async (
      _: any,
      {
        oldPassword,
        newPassword,
      }: { oldPassword: string; newPassword: string },
      { user }: { user: IUser }
    ) => updatePassword(oldPassword, newPassword, user._id),
    uploadUserAvatar: async (
      _: any,
      { avatar }: { avatar: string },
      { user }: { user: IUser }
    ) => uploadUserAvatar(avatar, user._id),
    deleteUser: async (_: any, { userId }: { userId: string }) =>
      deleteUser(userId),
  },
};

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  phoneNo?: string;
  role?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export type UserInput = {
  username: string;
  email: string;
  password: string;
  phoneNo: string;
};

export interface IAdminUser {
  _id: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

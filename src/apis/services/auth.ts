import axios from "axios";
import { LoginValues } from "../types";

export const headerUrl = "http://localhost:3001";

export const loginUser = async (variables: LoginValues) => {
  try {
    const res = await axios.post(`${headerUrl}/auth/login`, variables, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const getMe = async () => {
  try {
    const res = await axios.get(`${headerUrl}/users/me`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

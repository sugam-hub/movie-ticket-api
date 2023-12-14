import { UserSchema } from "../../models/user";

require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const hashPassword = async (input: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(input, salt);
}

export const matchPassword = async (password: string, user: UserSchema) => {
    console.log(user)
    return await bcrypt.compare(password, user.password);
};

export const generateAccessToken = (data: any) => {
    return jwt.sign(data, process.env.JWT_ACCESS_SECRET, {
        expiresIn: process.env.JWT_ACCESS_EXPIRESIN,
    });
};
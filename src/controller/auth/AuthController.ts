import { Op } from "sequelize";
import { createUser } from "../user/UserController";

const db = require("../../../models");

const {User} = db;

type Register = {
    username: string;
    email: string;
    password: string;
}

type Login = {
    email: string;
    password: string;
}

export const Register = async(input: Register): Promise<any> => {
    try{
        if(input.email){
            const existingUser = await User.findOne({
                where : {
                    [Op.or] : {
                        email: input.email,
                        username: input.username,
                    }
                }
            });
            if(existingUser){
                return {
                    errors: {
                        email : "This email is already registered!!!",
                        username: "This username is already taken!!!"
                    }
                }
            }
        }

        const userInfo = await createUser(input);
        return userInfo;
    }catch(error: any){
        console.log("User registration failed!!!");
    }
}
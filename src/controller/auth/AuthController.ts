import { Op } from "sequelize";
import { createUser } from "../user/UserController";
import { generateAccessToken, matchPassword } from "../../utils/AuthUtils";

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
        console.error("User registration failed!!!");
    }
}

export const Login = async (input: Login): Promise<any> => {
    try{
        const user = await User.findOne({
            where: {email: input.email},
            attributes: ["id","email", "password"]
        })
        
        // console.log(user);
        
        if(!user || user == null){
            // throw new Error("User not found");
            return {
                success: false,
                message: "User not found"
            }
        }

        const isMatch = await matchPassword(input.password, user);
        
      
        if(!isMatch){
            // throw new Error("Invalid Credentials");
            return {
                success: false,
                message: "Invalid credentials"
            }
        }
        
        if(isMatch){
            let userData = user.toJSON();
            console.log("Userdata", userData)
            delete userData.password;
            
            return {
                success: true,
                message: "Logged In Successfully",
                accessToken: generateAccessToken(userData),
            }
        }
    }catch(error: any){
        return (error);
    }
}
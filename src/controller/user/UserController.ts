import { UserSchema } from "../../../models/user";
import { hashPassword } from "../../utils/AuthUtils";

const db = require("../../../models");

const {User} = db;

export const createUser = async(input: UserSchema): Promise<any> => {
    try{
        if(input.email){
            const isEmailunique = await User.findOne({
                where: {
                    email: input.email,
                }
            });
         
            if(isEmailunique){
                return {
                    errors: {
                        email: "Email already exist!!!"
                    }
                }
            }

            if(input.password){
                input.password = await hashPassword(input.password)
            }

            const userData = await User.create(input);

            const result = {...userData.toJSON()};
            delete result.password;

            return result;
        }
    }catch(error: any){
        return {
            errors: `User registration failed ${error}`,
        }
    }
} 

export const UpdateUser = async (input: UserSchema, confirmpassword: string, userid: any): Promise<any> => {

    console.log("This is input", input)
    console.log("This is confirmpassword", confirmpassword);
    console.log("This is userid", userid)
try{
    if(input.password !== confirmpassword){
        return {
            errors: "Passsword and confirm password doesn't match",
        }
    }

    const user = await User.findOne({
        where : {id: userid}
    })

    if(input.password){
        input.password = await hashPassword(input.password)
    }

    const userData = await User.update(input);
    const result = {...userData.toJSON()};
    delete result.password;

    return result;
}catch(error: any){
    return {
        errors: `User update failed ${error}`
    }
}
}
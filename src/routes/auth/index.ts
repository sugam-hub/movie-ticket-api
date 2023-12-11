import {Request, Response} from "express"
import { createUser } from "../../controller/user/UserController";
import { Register } from "../../controller/auth/AuthController";
const router = require("express").Router();

router.post("/register", async (req: Request, res: Response)=> {
    try{
        const input = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        console.log(input);
        const data = await Register(input);
        return res.status(200).json(data);
    }catch(error: any){
        return res.status(401).json(error);
    }
})

module.exports = router;
import {Request, Response} from "express"
import { UpdateUser, createUser } from "../../controller/user/UserController";
import { Login, Register } from "../../controller/auth/AuthController";
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

router.post("/login", async(req: Request, res: Response)=> {
    try{
        const input = {
            email: req.body.email,
            password: req.body.password,
        }
        const data = await Login(input);
        return res.status(200).json(data);
    }catch(error: any){
        return res.status(401).json(error);
    }
})

router.post("/update/:userid",async (req: Request, res: Response) => {
    try{
        const confirmpassword = req.body.confirmpassword;
        const userid = req.params.userid;
        const input = {
            username: req.body.username,
            password: req.body.password,
        }
        const data = await UpdateUser(input, confirmpassword, userid)
        return res.status(200).json(data);
    } catch(error: any){
        return res.status(401).json(error);
    }
})

module.exports = router;
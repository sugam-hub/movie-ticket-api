import { Request, Response } from "express";
import { GetAllMovieHalls } from "../../controller/moviehall/MovieHallController";
const router = require("express").Router();


router.get("/", async(req: Request, res: Response) => {
    try{
        const data = await GetAllMovieHalls();
        return res.status(200).json(data);
    }catch(error: any){
        return res.status(401).json(error);
    }
})

module.exports = router;    
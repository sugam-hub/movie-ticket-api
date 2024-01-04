import {Request, Response} from "express";
import { GetBookedSeat } from "../../controller/bookedSeats/BookedSeatsController";
const router = require("express").Router();

router.get("/", async(req: Request, res: Response)=> {
    try{
        const data = await GetBookedSeat();
        return res.status(200).json(data)
    }catch(error: any){
        return res.status(401).json(error);
    }
})

module.exports = router;

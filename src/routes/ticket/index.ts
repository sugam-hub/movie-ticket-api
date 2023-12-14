import {Request, Response} from "express";
import { BookTicket } from "../../controller/ticket/TicketController";
const router = require("express").Router();

router.post("/bookticket/:userId", async (req: Request, res: Response)=>{
    try{
        const input = {
            seat_number: req.body.seat_number,
            date: req.body.date,
            time: req.body.time,
            price: req.body.price,
            customer_id: req.params.userId,
        }
        const data = await BookTicket(input);
        return res.status(200).json(data);
    }catch(error: any){
        return res.status(401).json(error)
    }
})

module.exports = router;
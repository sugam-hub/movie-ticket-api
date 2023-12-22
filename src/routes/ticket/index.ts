import {Request, Response} from "express";
import { BookTicket, GetAllTickets } from "../../controller/ticket/TicketController";
const router = require("express").Router();

router.post("/bookticket/:userId", async (req: Request, res: Response)=>{
    try{
        const input = {
            movie_name: req.body.movie_name,
            seat_number: req.body.seat_number,
            date: req.body.date,
            time: req.body.time,
            price: req.body.price,
            customer_id: req.params.userId,
        }
        console.log("This is input ticket data", input)
        const data = await BookTicket(input);
        return res.status(200).json(data);
    }catch(error: any){
        return res.status(401).json(error)
    }
})

router.get("/alluserticket/:userId", async (req: Request, res: Response) => {
    try{
        const userId = req.params.userId;
        const data = await GetAllTickets(userId);
        return res.status(200).json(data);
    }catch(error: any){
        return res.status(401).json(error);
    }
})

module.exports = router;
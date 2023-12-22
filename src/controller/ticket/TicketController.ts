import { TicketSchema } from "../../../models/ticket";

const db = require("../../../models");

const {Ticket} = db;

type Ticket = {
    seat_number: string;
    date: string;
    time: string;
    price: string;
    customer_id: string;
}

export const BookTicket = async (input: Ticket): Promise<any> => {
    try{
        const ticketInfo = await createTicket(input);
        return ticketInfo;
    }catch(error: any){
        return{
            errors: `Failed ${error}`,
        }
    }
}

export const createTicket = async(input: TicketSchema): Promise<any> => {
    try{
        const ticketData = await Ticket.create(input);
        return ticketData;
    }catch(error: any){
        return {
            errors: `Ticket Booking Failed, ${error}`,
        }
    }
}

export const GetAllTickets = async (customerId: string): Promise<any> => {
    try{
        const ticket = await Ticket.findAll({
            where: {customer_id: customerId},
            order: [["createdAt", "DESC"]]
        });
        return ticket; 
    }catch(error: any){
        return {
            errors: "Getting ticket failed",
        }
    }
}
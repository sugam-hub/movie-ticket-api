const db = require("../../../models")

const {Ticket} = db;

export const GetBookedSeat = async(): Promise<any> => {
    try{
        const ticket = await Ticket.findAll({
            attributes: ["id", "movie_name", "seat_number", "date", "time"]
        });
        return ticket;
    }catch(error: any){
        return {
            errors: "Getting ticket failed"
        }
    }
}
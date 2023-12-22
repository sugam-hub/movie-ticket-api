import { MovieHallSchema } from "../../../models/moviehall";

const db = require("../../../models");

const {MovieHall} = db;

export const GetAllMovieHalls = async (): Promise<any> => {
    try{
        const moviehall = await MovieHall.findAll({
            attributes: ["id", "hall_name", "latitude", "longitude"]
        })
        return {
            success: true,
            data: moviehall,
        }
    }catch(error: any){
        return {
            success: false,
            errors: `Failed ${error}`,
        }
    }
}
import mongoose from "mongoose";
import { MONGO_URL, NODE_ENV } from "./server.config.js";

export const connectToDB = async() => {
    try{
        if(NODE_ENV == "development"){
            await mongoose.connect(MONGO_URL);
        }
    } catch(error){
        console.log("Unable to connect to DB server");
        console.log(error);
    }
}
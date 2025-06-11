import { StatusCodes } from "http-status-codes";
import BaseError from "./baseError.js";

class NotFoundError extends BaseError{
    constructor(details){
        super("Not Found Error", StatusCodes.NOT_FOUND,"Resource not found",details)
    }
}

export default NotFoundError;
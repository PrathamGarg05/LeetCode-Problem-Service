import { StatusCodes } from "http-status-codes";
import BaseError from "./baseError.js";

class NotFoundError extends BaseError{
    constructor(resourceName, resourceValue){
        super("Not Found Error", StatusCodes.NOT_FOUND, `The requested resource ${resourceName} with value ${resourceValue} does not exist`,{
            resourceName,
            resourceValue
        })
    }
}

export default NotFoundError;
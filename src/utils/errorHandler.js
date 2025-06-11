import { StatusCodes } from "http-status-codes";
import BaseError from "../errors/baseError.js";

function errorHandler(err, req, res, next) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode) .json({
            success : false,
            data : {},
            message: err.message,
            error: err.details
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR) .json({
        success : false,
        data : {},
        message: 'Something went Wrong',
        error: err
    });
}

export default errorHandler;
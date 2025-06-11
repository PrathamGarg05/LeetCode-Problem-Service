import { StatusCodes } from "http-status-codes";
import NotImplemented from "../errors/notImplemented.error.js";

export const pingProblem = (req,res) => {
    return res.json({message : "Problem ping is called"});
}

export const addProblem = async (req,res,next) => {
    try{
        throw new NotImplemented('addProblem');
    } catch(error){
        next(error);
    }
}

export const getProblem = async (req,res) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED)
    .json({
        message : " Function not implemeneted yet "
    });
}

export const getProblems = async (req,res) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED)
    .json({
        message : " Function not implemeneted yet "
    });
}

export const deleteProblem = async (req,res) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED)
    .json({
        message : " Function not implemeneted yet "
    });
}

export const updateProblem = async (req,res) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED)
    .json({
        message : " Function not implemeneted yet "
    });
}
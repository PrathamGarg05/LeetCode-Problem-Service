import { StatusCodes } from "http-status-codes";

export const pingProblem = (req,res) => {
    return res.json({message : "Problem ping is called"});
}

export const addProblem = async (req,res) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED)
    .json({
        message : " Function not implemeneted yet "
    });
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
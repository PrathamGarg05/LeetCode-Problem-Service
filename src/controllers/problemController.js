import { StatusCodes } from "http-status-codes";
import NotImplemented from "../errors/notImplemented.error.js";
import ProblemRepository from "../repository/problem.repo.js";
import ProblemService from "../services/problem.service.js";

const problemService = new ProblemService(new ProblemRepository());

export const pingProblem = (req,res) => {
    return res.json({message : "Problem ping is called"});
}

export const addProblem = async (req,res,next) => {
    try{
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new problem",
            data: newProblem,
            error: {}
        })
    } catch(error){
        next(error);
    }
}

export const getProblem = async (req,res,next) => {
    try{
        const problem = await problemService.getProblemById(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problem fetched successfully',
            data: problem,
            error: {}
        })
    } catch(error){
        next(error);
    }
}

export const getProblems = async (req,res,next) => {
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Fetched all problems',
            data: response, 
            error: {}
        })
    } catch(error){
        next(error);
    }
}

export const deleteProblem = async (req,res,next) => {
    try{
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Deleted the problem',
            data: deletedProblem, 
            error: {}
        })
    } catch(error){
        next(error);
    }
}

export const updateProblem = async (req,res,next) => {
    try{
        throw new NotImplemented('addProblem');
    } catch(error){
        next(error);
    }
}
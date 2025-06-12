import NotFoundError from "../errors/NotFoundError.js";
import { Problem } from "../models/problem.model.js";

class ProblemRepository {
    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testcases: (problemData.testcases) ? problemData.testcases : []
            });

            return problem;
        } catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try{
            const problems = await Problem.find({});
            return problems;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getProblemById(problemId){
        try{
            const problem = await Problem.findById(problemId);
            if(!problem){
                throw new NotFoundError('Problem',problemId);
            }
            return problem;
        } catch(error){
            console.log(error);
            throw error;
        }

    }
}

export default ProblemRepository;
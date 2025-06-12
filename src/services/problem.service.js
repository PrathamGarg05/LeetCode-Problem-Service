import sanitizeMarkdown from "../utils/markdownSanitizer.js";

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }
    async createProblem(problemData){
        try{
            // Santize the markdown for description
            problemData.description = sanitizeMarkdown(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);
            
            return problem;
            
        } catch(error) {
            console.log(error);
            throw(error);
        }
    }

    async getAllProblems(){
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblemById(problemId){
        const problem = await this.problemRepository.getProblemById(problemId);
        return problem;
    }

    async deleteProblem(problemId){
        const deletedProblem = await this.problemRepository.deleteProblem(problemId);
        return deletedProblem;
    }

    async updateProblem(problemId, updateData){
        const updatedProblem = await this.problemRepository.updateProblem(problemId, updateData);
        return updatedProblem;
    }

}

export default ProblemService
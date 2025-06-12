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

}

export default ProblemService
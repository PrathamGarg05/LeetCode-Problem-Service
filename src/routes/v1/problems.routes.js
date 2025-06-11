import express from 'express';
import problemController from '../../controllers/controllers.export.js';

const problemRouter = express.Router();

problemRouter.get('/ping', problemController.pingProblem);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getProblem);

problemRouter.post('/',problemController.addProblem);

problemRouter.delete('/:id', problemController.deleteProblem);

problemRouter.put('/:id', problemController.updateProblem);

export default problemRouter;
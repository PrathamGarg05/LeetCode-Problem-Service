import express from 'express';
import v1Router from './v1/v1Router.js';

const apiRouter = express.Router();

apiRouter.use('/v1', v1Router);
apiRouter.get('/',(req,res) => {
    res.json({message : "api rputer running"})
});

export default apiRouter;
import express from 'express';
import problemRouter from './problems.routes.js';

const v1Router = express.Router();

v1Router.use('/problems', problemRouter);
v1Router.get('/',(req,res) => {
    res.json({message : "v1 route running"});
})

export default v1Router;
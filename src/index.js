import express from 'express'
import { PORT } from './config/server.config.js';
import apiRouter from './routes/apiRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.text());

app.use('/api', apiRouter);

app.get('/ping', (req,res) => {
    return res.json({message : "ping route running"});
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT}`);
})
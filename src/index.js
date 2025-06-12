import express from 'express'
import { PORT } from './config/server.config.js';
import apiRouter from './routes/apiRouter.js';
import errorHandler from './utils/errorHandler.js';
import { connectToDB } from './config/db.config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.text());

app.use('/api', apiRouter);

app.get('/ping', (req,res) => {
    return res.json({message : "ping route running"});
})

// LAst middleware if any error comes
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server running at Port ${PORT}`);
    await connectToDB();
    console.log("Successfully connected to DB");
})
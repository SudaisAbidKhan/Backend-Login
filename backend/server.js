import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRoute from './routes/userRoute.js';
import connectDB from './config/mongoDB.js';
import postRoute from './routes/postRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
connectDB();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

// API endpoints
app.get('/', (req, res)=>{
    res.send("Api working")
})

app.use('/api/user', userRoute)
app.use('/api/post', postRoute)

app.listen(port, ()=> console.log(`Server started on PORT:${port}`)) 

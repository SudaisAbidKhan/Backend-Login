import express from 'express'
import { getAllPost, uploadPost, getUserPost } from '../controllers/postController.js';
import userAuth from '../middleware/userAuth.js';

const postRoute = express.Router();

postRoute.post('/upload-post',userAuth, uploadPost);
postRoute.get('/get-all-post',userAuth, getAllPost);
postRoute.get('/get-user-post',userAuth, getUserPost);

export default postRoute

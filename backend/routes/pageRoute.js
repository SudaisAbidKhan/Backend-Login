import express from "express";
import {
  getAllPage,
  getUserPage,
  uploadPage,
} from "../controllers/pageController.js";
import userAuth from "../middleware/userAuth.js";


const pageRoute = express.Router();

pageRoute.post("/upload-page", userAuth, uploadPage);
pageRoute.get("/get-all-page", userAuth, getAllPage);
pageRoute.get("/get-user-page", userAuth, getUserPage);

export default pageRoute;

import mongoose from "mongoose";
import userModel from "./userModel.js";

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  data: {
      title: { type: String, required: true },
      desc: { type: String, required: true },
  },
  
});

const postModel = mongoose.models.post || mongoose.model("post", postSchema);

export default postModel;

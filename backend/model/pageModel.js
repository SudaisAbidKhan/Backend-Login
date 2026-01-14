import mongoose from "mongoose";
import userModel from "./userModel.js";

const pageSchema = new mongoose.Schema({
  author: { type: String, required: true },
  data2: {
    item: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
  },
});

const pageModel = mongoose.models.page || mongoose.model("page", pageSchema);

export default pageModel;

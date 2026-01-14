import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import pageRoute from "./routes/pageRoute.js";
import cookieParser from "cookie-parser";
import pageModel from "./model/pageModel.js";
import postModel from "./model/postModel.js";

const app = express();
connectDB();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// API endpoints
app.get("/", (req, res) => {
  res.send("Api working");
});

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/page", pageRoute);

// Get everything of a single author
app.get("/geteverything/:author", async (req, res) => {
  try {
    const { author } = req.params;

    const postDocs = await postModel.find({ author }, { data: 1, _id: 0 });
    const pageDocs = await pageModel.find({ author }, { data2: 1, _id: 0 });

    return res.json({
      success: true,
      author,
      post: postDocs.map((p) => p.data),
      page: pageDocs.map((p) => p.data2),
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

// Get everything of all authors
app.get("/geteverything", async (req, res) => {
  try {
    const { author } = req.params;

    const postDocs = await postModel.find({}, { data: 1, author: 1, _id: 0 });
    const pageDocs = await pageModel.find({}, { data2: 1, author: 1, _id: 0 });

    return res.json({
      success: true,
      author,
      post: postDocs.map((p) => ({ author: p.author, data: p.data})),
      page: pageDocs.map((p) => ({ author: p.author, data: p.data2})),
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));

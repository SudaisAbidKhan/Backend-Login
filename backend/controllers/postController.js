import postModel from "../model/postModel.js";
import userModel from "../model/userModel.js";

export const uploadPost = async (req, res) => {
  const { userId } = req;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: true, message: "User not found" });
    }

    const name = user.name;
    const { data } = req.body;
    const newPost = new postModel({ author: name, data});
    await newPost.save();

    return res.json({ success: true, message: "Post Uploaded" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getAllPost = async (req, res) => {
  try {
    const post = await postModel.find();

    return res.json({ success: true, post: post });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getUserPost = async (req, res) => {
  const { userId } = req;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: true, message: "User not found" });
    }
    const author = user.name
    const userPost = await postModel.find({author});

    return res.json({ success: true, userPost});

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}

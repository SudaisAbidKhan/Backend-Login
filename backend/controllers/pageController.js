import pageModel from "../model/pageModel.js";
import userModel from "../model/userModel.js";

export const uploadPage = async (req, res) => {
  const { userId } = req;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: true, message: "User not found" });
    }

    const name = user.name;
    const { data2 } = req.body;
    const newpage = new pageModel({ author: name, data2});
    await newpage.save();

    return res.json({ success: true, message: "page Uploaded" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getAllPage = async (req, res) => {
  try {
    const page = await pageModel.find();

    return res.json({ success: true, page: page });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getUserPage = async (req, res) => {
  const { userId } = req;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: true, message: "User not found" });
    }
    const author = user.name
    const userpage = await pageModel.find({author});

    return res.json({ success: true, userpage});

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}

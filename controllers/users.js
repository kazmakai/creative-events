const User = require("../models/user");
const cloudinary = require("../utilities/cloudinary");
// const upload = require('../utils/multer');

module.exports = {
  edit,
  update,
  show,
};

async function show(req, res) {
  const user = await User.findById(req.params.id);
  res.render("users/show", { title: "User profile", user });
}

async function edit(req, res) {
  const user = await User.findById(req.params.id);
  res.render("users/edit", { title: "Edit Profile", errorMsg: "", user });
}

async function update(req, res) {
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        city: req.body.city,
        aboutMe: req.body.aboutMe,
        interests: req.body.interests,
        avatar: result.secure_url,
        cloudinary_id: result.public_id
      });
      await user.save();
      res.redirect(`/users/${user._id}`);
    } else {
      const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        city: req.body.city,
        aboutMe: req.body.aboutMe,
        interests: req.body.interests
      });
      await user.save();
      res.redirect(`/users/${user._id}`);
    }
  } catch (err) {
    console.log(err);
  }
}

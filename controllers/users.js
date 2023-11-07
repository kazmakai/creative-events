const User = require('../models/user');
const cloudinary = require('../utilities/cloudinary');


module.exports = {
    edit,
    update,
    show
}

async function show(req, res) {
    const user = await User.findById(req.params.id);
    res.render('users/show', {title: 'User profile', user});
}

async function edit(req,res) {
    const user = await User.findById(req.params.id)
    res.render('users/edit', { title: 'Edit Profile', errorMsg:'', user});
}

async function update(req, res) {
    req.body.user = req.user._id;
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        let user = new User({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id
        });
        await user.save();
        res.redirect(`/users/${user._id}`);
    } catch(err) {
        console.log(err);
    }
}
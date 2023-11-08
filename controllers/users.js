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
<<<<<<< HEAD
=======
    console.log('test comment')
>>>>>>> origin/main
    try {
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
        console.log(user);
        await user.save();
        res.redirect(`/users/${user._id}`);
    } catch(err) {
        console.log(err);
    }
}
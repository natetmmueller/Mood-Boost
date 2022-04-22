const { User } = require("../models/User");
const { Post } = require("../models/Post");

exports.profile_get = (req, res) => {
  User.findById(req.body.id)
    .populate()
    .then((user) => {
      res.json({ user });
    })
    .catch((error) => {
      console.log(error);
    });
};

const { User } = require("../models/User");
const { Post } = require("../models/Post");

const moment = require("moment");
const mongoose = require("mongoose");


//post a post
exports.addPost = (req, res) => {
  console.log("api called");
  console.log(req.user.id);
  let post = new Post(req.body);
  let userid = req.user.id;
  console.log(userid);
  post.user = userid;
  post
    .save()
    .then(() => {
      res.status(200).send("done");
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get all posts
exports.post_index = (req, res) => {
  Post.find()
    .populate()
    .then((posts) => {
      for (let post of posts) {
        post.path = `/post/${post._id}`;
        post.save();
      }
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
};

//detail page of a post
exports.showPost = async (req, res) => {
  try {
    let post = await Post.findById(req.query.id).populate("user");
    console.log("01",post)
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};

//add a comment
exports.addComment = async (req, res) => {
  try {
    req.body.user = req.user;
    let post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    post.save();
    res.status(200).json({post});
  } catch (err) {
      console.log(err)
    res.status(400).json(err);
  }
};

// load post edit form
exports.postEdit = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
};

// post update
exports.postUpdate = (req, res) => {
  console.log("00", req.body._id);
  Post.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
};

//deleting the post
exports.deletePost = (req, res) => {
  console.log(req.query.id);
  Post.findByIdAndDelete(req.query.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(post);
    });
};


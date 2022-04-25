const { User } = require("../models/User");
const { Post } = require("../models/Post");

const moment = require("moment");

//post a post
exports.addPost = (req, res) => {
  let post = new Post(req.body);

  post
    .save()
    .then(() => {
      res.status(200).send("done");
    })
    .catch((err) => {
      console.log(err);
      res.send("Error!");
    });
};
//Get all posts
exports.post_index = (req, res) => {
  Post.find()
    .populate()
    // res.render('routes/allPost', {posts})
    //instead of rendering a view i nedd to render via React
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
};

// gets a post from the database
// exports.getPost = (req, res) => {
//     Post.find().populate('user')
//     .then(posts => {
//         res.json({posts})
//     })
//     .catch(err => {
//         console.log(err);
//     });
// };

//detail page of a post
exports.showPost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id).populate("user");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};

//add a comment
exports.addComment = (req, res) => {
  try {
    req.body.user = req.user;
    let post = Post.findById(req.params.id);
    post.comments.push(req.body);
    post.save();
    res.status(200).send("Done");
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.postEdit = (req, res) => {
  try {
    let update = Post.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).send("Done");
  } catch (err) {
    res.status(400).json(err);
  }
};

//deleting the post
// exports.deletePost = (req, res) => {
//     try {
//         Post.findByIdAndDelete(req.params.id)
//         res.status(200).send('Done')

//     } catch(err){
//         res.status(400).json(err);
//     }
// }
exports.deletePost = (req, res) => {
  console.log(req.query.id);
  Post.findByIdAndDelete(req.query.id)
    .then((post) => {
      // res.redirect("/author/index")
      res.json(post);
    })
    .catch((err) => {
      console.log(post);
    });
};

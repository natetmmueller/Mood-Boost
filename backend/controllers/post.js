
const {User} = require("../models/User");
const {Post} = require("../models/Post");

const moment = require("moment");

//Get all posts
exports.post_index = (req, res) => {
    Post.find({}).populate()
    // res.render('routes/allPost', {posts})
    //instead of rendering a view i nedd to render via React
    .then(posts => {
        res.json({posts})
    })
    .catch(error => {
        console.log(error)
    })
}


//post a post 
exports.addPost = (req, res) => {
    req.body.user = req.user.firstName
    Post.create(req.body)
    
    //this is going to have to show up
    res.status(200).send('Done')
}


//detail page of a post
exports.showPost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id).populate('user');
        res.status(200).json(post);
      } catch (err) {
        res.status(400).json(err);
      }
}

//add a comment
exports.addComment = (req, res) => {
    req.body.user = req.user
    let post = Post.findById(req.params.id)
    post.comments.push(req.body)
    post.save()
    res.status(200).send('Done')
    
}

exports.postEdit = (req, res) => {
   let update = Post.findByIdAndUpdate(req.body.id, req.body)
   res.status(200).send('Done')
}


//deleting the post
exports.deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    res.status(200).send('Done') 
}


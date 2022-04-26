const mongoose = require('mongoose');

const commentSchema = mongoose.Schema ({
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comment:String
},
{
    timestamps: true
})

const postSchema = mongoose.Schema ({
    postTitle: String,
    path: String,
    scale: Number,
    description: String,
    linkToIt: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comments: [commentSchema]
},
{
    timestamps: true
});

const Post = mongoose.model("Post", postSchema)

module.exports = {Post}
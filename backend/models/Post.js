const mongoose = require('mongoose');

const commentSchema = mongoose.Schema ({
    user:Object,
    comment:String
},
{
    timestamps: true
})

const postSchema = mongoose.Schema ({
    postTitle: String,
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
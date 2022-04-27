// Dependencies
const express = require("express");
var methodOverride = require("method-override");
const isLoggedIn = require("../helper/isLoggedIn");

const router = express.Router();

router.use(methodOverride("_method"));

//we have to change this to json
// router.use(express.urlencoded({extended: true}));
router.use(express.json());

//Import Post Controller
const postCntrl = require("../controllers/post");

//routes
router.get("/post/index", postCntrl.post_index);

router.post("/post/add", isLoggedIn, postCntrl.addPost);

router.get("/post/edit/:id", postCntrl.postEdit);

router.put("/post/update", postCntrl.postUpdate);

router.delete("/post/delete", postCntrl.deletePost);

router.get("/post", postCntrl.showPost);

router.post("/post/:id/comments", postCntrl.addComment);

// router.delete("/post/comments/delete", postCntrl.deleteComment);

module.exports = router;

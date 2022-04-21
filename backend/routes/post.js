// Dependencies
const express = require("express");
var methodOverride = require('method-override')

const router = express.Router();

router.use(methodOverride('_method'))

//we have to change this to json
// router.use(express.urlencoded({extended: true}));
router.use(express.json())

//Import Post Controller
const postCntrl = require("../controllers/post")

//routes
router.get('/post/all', postCntrl.post_index);

router.post('/post/all', postCntrl.addPost);

router.put('/post/all', postCntrl.postEdit);

router.delete('/post/delete/:id', postCntrl.deletePost);

router.get('/post/:id', postCntrl.showPost);

router.post('/post/:id/comments', postCntrl.addComment)

module.exports = router;
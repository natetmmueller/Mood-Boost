const express = require("express");
var methodOverride = require("method-override");
const isLoggedIn = require("../helper/isLoggedIn");

const router = express.Router();

router.use(methodOverride("_method"));

router.use(express.json());

//Import Post Controller
const profileCntrl = require("../controllers/profile");

router.get("/profile", profileCntrl.profile_get);
router.post("/profile", profileCntrl.profile_create_post);

module.exports = router;

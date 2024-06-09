const express = require("express");
const { getAllBlogs, getBlogBySlug } = require("../controllers/blogController");

const router = express.Router();

router.get("/blogs", getAllBlogs);
router.get("/blogs/:slug", getBlogBySlug);

module.exports = router;

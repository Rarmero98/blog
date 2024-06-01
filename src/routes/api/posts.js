const router = require("express").Router();

const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/posts.controller");

router.get("/", getAllPosts);
router.post("/", createPost);
router.put("/", updatePost);
router.delete("/", deletePost);

module.exports = router;

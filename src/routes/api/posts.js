const router = require("express").Router();

const {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/posts.controller");

router.get("/", getAllPosts);
router.get("/:post_id", getPostById);
router.get("/autor/:autor_nombre", getPostsByAuthor);
router.post("/", createPost);
router.put("/:post_id", updatePost);
router.delete("/:post_id", deletePost);

module.exports = router;

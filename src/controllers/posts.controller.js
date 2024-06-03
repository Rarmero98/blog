const getAllPosts = async (req, res) => {
  const response = await db.query("SELECT * FROM posts");

  res.json(response[0]);
};

const createPost = (req, res) => {
  res.send("Se ha creado una publicación");
};

const updatePost = (req, res) => {
  const { post_id } = req.params;

  res.send("Se ha actualizado una publicación");
};

const deletePost = (req, res) => {
  const { post_id } = req.params;

  res.send("Se ha borrado una publicación");
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};

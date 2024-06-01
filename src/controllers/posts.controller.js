const getAllPosts = (req, res) => {
  res.send("Se leen todas las publicaciones");
};

const createPost = (req, res) => {
  res.send("Se ha creado una publicación");
};

const updatePost = (req, res) => {
  res.send("Se ha actualizado una publicación");
};

const deletePost = (req, res) => {
  res.send("Se ha borrado una publicación");
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};

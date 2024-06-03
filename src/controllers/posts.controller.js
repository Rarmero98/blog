const posts = require("../models/posts.model");

const getAllPosts = async (req, res, next) => {
  try {
    const [response] = await posts.selectAll();
    res.json(response);
  } catch (err) {
    next(err);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const [result] = await posts.selectById(req.params.post_id);

    if (result.length === 0) {
      return res.status(404).json({ fatal: "Publicación no encontrada" });
    }
    res.json(result[0]);
  } catch (err) {
    next(err);
  }
};

const getPostsByAuthor = async (req, res, next) => {
  try {
    const [response] = await posts.selectPostsByAuthor(req.params.autor_nombre);
    if (response.length === 0) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }
    res.json(response);
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const [response] = await posts.insert(req.body);
    const [[post]] = await posts.selectById(response.insertId);
    res.json(post);
  } catch (err) {
    next(err);
  }
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
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost,
};

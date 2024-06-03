const autores = require("../models/autores.model");

const getAllAutores = async (req, res, next) => {
  try {
    const [response] = await autores.selectAll();
    res.json(response);
  } catch (err) {
    next(err);
  }
};

const getAutorById = async (req, res, next) => {
  try {
    const [result] = await autores.selectById(req.params.autor_id);

    if (result.length === 0) {
      return res.status(404).json({ fatal: "Autor no encontrado" });
    }
    res.json(result[0]);
  } catch (err) {
    next(err);
  }
};

const createAutor = async (req, res) => {
  const [response] = await autores.insert(req.body);
  res.json(response);
};

const updateAutor = (req, res) => {
  const { autor_id } = req.params;

  res.send("Se ha actualizado un autor");
};

const deleteAutor = (req, res) => {
  const { autor_id } = req.params;

  res.send("Se ha borrado un autor");
};

module.exports = {
  getAllAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor,
};

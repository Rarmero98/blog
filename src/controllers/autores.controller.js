const getAllAutores = (req, res) => {
  res.send("Se leen todos los autores");
};

const createAutor = (req, res) => {
  res.send("Se ha creado un autor");
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
  createAutor,
  updateAutor,
  deleteAutor,
};

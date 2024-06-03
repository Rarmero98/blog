// Funciones con las queries que lanzamos contra la tabla autores
const selectAll = () => {
  return db.query("SELECT * FROM autores");
};

const selectById = (autorId) => {
  return db.query("select * from autores where id = ?", [autorId]);
};

const insert = ({ nombre, email, imagen }) => {
  return db.query(
    "INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)",
    [nombre, email, imagen]
  );
};

module.exports = {
  selectAll,
  insert,
  selectById,
};

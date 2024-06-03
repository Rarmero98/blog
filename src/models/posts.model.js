// Funciones con las queries que lanzamos contra la tabla posts
const selectAll = () => {
  return db.query("SELECT * FROM posts");
};

const selectById = (postId) => {
  return db.query("select * from posts where id = ?", [postId]);
};

const selectPostsByAuthor = (autoresNombre) => {
  return db.query(
    "SELECT posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria FROM posts INNER JOIN autores ON posts.id = autores_id WHERE autores.nombre = ?",
    [autoresNombre]
  );
};

const insert = ({
  titulo,
  descripcion,
  fecha_creacion,
  categoria,
  autores_id,
}) => {
  return db.query(
    "INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autores_id) VALUES (?, ?, ?, ?, ?)",
    [titulo, descripcion, fecha_creacion, categoria, autores_id]
  );
};

module.exports = {
  selectAll,
  selectById,
  selectPostsByAuthor,
  insert,
};

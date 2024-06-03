// Funciones con las queries que lanzamos contra la tabla posts
const selectAll = () => {
  return db.query("SELECT * FROM posts");
};

// Función que cumple el requisito de recuperar todos los datos del autor de una publicación
const selectById = (postId) => {
  return db.query(
    "SELECT pos.titulo `Título de la publicación`, pos.descripcion `Descripción`, pos.fecha_creacion `Fecha de publicación`, pos.categoria `Categoría`, aut.nombre `Nombre del autor`, aut.email `Correo del autor`, aut.imagen `Foto de perfil` FROM posts pos INNER JOIN autores aut ON pos.autores_id = aut.id WHERE pos.id = ?",
    [postId]
  );
};

// Función que cumple el requisito de recuperar los diferentes posts escritos por un autor
const selectPostsByAuthor = (autoresNombre) => {
  return db.query(
    "SELECT pos.titulo `Título de la publicación`, pos.descripcion `Descripción`, pos.fecha_creacion `Fecha de publicación`, pos.categoria `Categoría` FROM posts pos INNER JOIN autores aut ON pos.autores_id = aut.id WHERE aut.nombre = ?",
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

const router = require("express").Router();

const {
  getAllAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor,
} = require("../../controllers/autores.controller");

router.get("/", getAllAutores);
router.get("/:autor_id", getAutorById);
router.post("/", createAutor);
router.put("/:autor_id", updateAutor);
router.delete("/:autor_id", deleteAutor);

module.exports = router;

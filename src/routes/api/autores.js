const router = require("express").Router();

const {
  getAllAutores,
  createAutor,
  updateAutor,
  deleteAutor,
} = require("../../controllers/autores.controller");

router.get("/", getAllAutores);
router.post("/", createAutor);
router.put("/", updateAutor);
router.delete("/", deleteAutor);

module.exports = router;

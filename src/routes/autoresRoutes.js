import express from "express";
import AutorController from "../controllers/autorController.js";

const router = express.Router();

router.get("/autores", AutorController.getAllAutores);
router.get("/autores/:id", AutorController.getAutorById);
router.post("/autores", AutorController.createAutor);
router.patch("/autores/:id", AutorController.updateAutor);
router.delete("/autores/:id", AutorController.deleteAutor);

export default router;

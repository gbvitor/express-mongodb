import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router.get("/livros", LivroController.getAllLivros);
router.get("/livros/:id", LivroController.getLivroById);
router.post("/livros", LivroController.createLivro);
router.put("/livros/:id", LivroController.updateLivro);
router.delete("/livros/:id", LivroController.deleteLivro);

export default router;

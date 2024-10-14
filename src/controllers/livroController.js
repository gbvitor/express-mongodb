import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
    static async getAllLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getLivroById(req, res) {
        try {
            const { id } = req.params;
            const livroId = await livro.findById(id);
            res.status(200).json(livroId);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {
                ...novoLivro,
                autor: { ...autorEncontrado._doc },
            };
            const novoLivroCriado = await livro.create(livroCompleto);
            res.status(201).json(novoLivroCriado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateLivro(req, res) {
        try {
            const { id } = req.params;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteLivro(req, res) {
        try {
            const { id } = req.params;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async listaLivrosPorEditora(req, res) {
        try {
            const { editora } = req.query;
            const livros = await livro.find({ editora: editora });
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default LivroController;

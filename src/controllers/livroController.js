import livro from "../models/Livro.js";

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
        try {
            const NovoLivro = await livro.create(req.body);
            res.status(201).json(NovoLivro);
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
        const { id } = req.params;
        await livro.findByIdAndDelete(id);
        res.json({ message: "Livro excluído com sucesso!" });
    }
}

export default LivroController;

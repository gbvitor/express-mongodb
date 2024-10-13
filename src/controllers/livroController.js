import livro from "../models/Livro";

class LivroController {
    static async getAllLivros(req, res) {
        const livros = await livro.find({});
        res.json(livros);
    }

    static async getLivroById(req, res) {
        const { id } = req.params;
        const livro = await livro.findById(id);
        res.json(livro);
    }

    static async createLivro(req, res) {
        const livro = new livro(req.body);
        await livro.save();
        res.json({ message: "Livro criado com sucesso!" });
    }

    static async updateLivro(req, res) {
        const { id } = req.params;
        const livro = await livro.findById(id);
        Object.assign(livro, req.body);
        await livro.save();
        res.json({ message: "Livro atualizado com sucesso!" });
    }

    static async deleteLivro(req, res) {
        const { id } = req.params;
        await livro.findByIdAndDelete(id);
        res.json({ message: "Livro excluído com sucesso!" });
    }
}

export default LivroController;

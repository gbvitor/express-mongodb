import { autor } from "../models/Autor.js";

class AutorController {
    static async getAllAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getAutorById(req, res) {
        try {
            const { id } = req.params;
            const autorId = await autor.findById(id);
            if (!autorId) {
                return res
                    .status(404)
                    .json({ message: "Autor não encontrado" });
            }
            res.status(200).json(autorId);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json(novoAutor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateAutor(req, res) {
        try {
            const { id } = req.params;
            const autorAtualizado = await autor.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );
            if (!autorAtualizado) {
                return res
                    .status(404)
                    .json({ message: "Autor não encontrado" });
            }
            res.status(200).json({
                message: "Autor atualizado com sucesso!",
                autorAtualizado,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteAutor(req, res) {
        try {
            const { id } = req.params;
            const autorExcluido = await autor.findByIdAndDelete(id);
            if (!autorExcluido) {
                return res
                    .status(404)
                    .json({ message: "Autor não encontrado" });
            }
            res.status(200).json({ message: "Autor excluído com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default AutorController;

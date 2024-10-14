import mongoose from "mongoose";
import { AutorSchema } from "./Autor.js";
const LivroSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        titulo: {
            type: String,
            required: true,
        },
        autor: AutorSchema,
        editora: {
            type: String,
            required: true,
        },
        ano: {
            type: Number,
            required: true,
        },
        preco: {
            type: Number,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

const livro = mongoose.model("Livros", LivroSchema);

export default livro;

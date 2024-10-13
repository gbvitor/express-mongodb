import mongoose from "mongoose";
const LivroSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        titulo: {
            type: String,
            required: true,
        },
        autor: {
            type: String,
            required: true,
        },
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

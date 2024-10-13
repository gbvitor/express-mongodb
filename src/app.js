import express from "express";
import connectDatabase from "./config/connectDatabase.js";

const conexão = await connectDatabase();
conexão.on("error", (error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
});

conexão.once("open", () => {
    console.log("Conectado ao MongoDB");
});

const app = express();
app.use(express.json());

export default app;

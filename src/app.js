import express from "express";
import connectDatabase from "./config/connectDatabase.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

const conexão = await connectDatabase();
conexão.on("error", (error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
});

conexão.once("open", () => {
    console.log("Conectado ao MongoDB");
});

export default app;

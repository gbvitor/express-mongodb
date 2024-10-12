import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDatabase() {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.kxeto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );
        if (mongoose.connection.readyState === 1) {
            console.log("Conectado ao MongoDB");
        } else {
            console.log("Erro ao conectar ao MongoDB");
        }
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error.message);
    }
    return mongoose.connection;
}

export default connectDatabase;

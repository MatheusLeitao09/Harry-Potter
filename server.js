// Importar pacotes/bibliotecas
import express from "express";
import dotenv from "dotenv";
import bruxosRoutes from "./src/routes/bruxosRoutes.js"
import animaisRoutes from "./src/routes/animaisRoutes.js"
import pocoesRoutes from "./src/routes/pocoesRoutes.js"

// Criar aplicação com Express e configurar para aceitar JSON
const app = express();
app.use(express.json());

// Carregar variáveis de ambiente e definir constante para porta do servidor
dotenv.config();
const serverPort = process.env.PORT || 3001;

// Rota principal GET para "/"
app.get("/", (req, res) => {
    res.send("🚀 Api dos Bruxos funcionando!");
});


// Aqui vão todas suas Rotas
app.use("/bruxos", bruxosRoutes);
app.use("/animais", animaisRoutes);
app.use("/pocoes", pocoesRoutes);

// Iniciar servidor escutando na porta definida
app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});


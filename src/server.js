import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(
    "<a href='http://localhost:3000/lobos'>Não há lobos aqui, infelizmente</a>",
  );
});

app.get("/lobos", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/lobos.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

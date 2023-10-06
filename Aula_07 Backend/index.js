const express = require("express");

const app = express();

app.use(express.json());

let nomes = []; // banco de dados
// CRUD
// CREATE
app.post("/post", (req, res) => {
    const { nome, sobrenome } = req.body;

    nomes.push(nome);

    res.status(200).json({
        message: `O nome é ${nome} o sobrenome é ${sobrenome}`,
    });
});

// READ
app.get("/get", (req, res) => {
    res.status(200).json(nomes);
});

// UPDATE
app.put("/put", (req, res) => {
    const { nome, nomeAtualizado } = req.body;

    const index = nomes.findIndex((n) => n === nome);

    if (index >= 0) {
        nomes[index] = nomeAtualizado;
        res.status(200).json({
            message: `Registro atualizado. Nome: ${nomeAtualizado}`,
        });
    } else {
        res.status(404).json({ message: "Nome não encontrado" });
    }
});

// DELETE
app.delete("/delete/:nome", (req, res) => {
    const { nome } = req.params;

    const index = nomes.findIndex((n) => n === nome);

    if (index >= 0) {
        nomes.splice(index, 1);
        res.status(200).json({ message: `Registro excluído. Nome: ${nome}` });
    } else {
        res.status(404).json({ message: "Nome não encontrado" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000!!!");
});

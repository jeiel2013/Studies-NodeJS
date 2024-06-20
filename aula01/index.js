const express = require("express");
const server = express();

// http://localhost:3000/hello?nome=Jeiel&idade=19
// Query params = ?nome=Jeiel&idade=19


server.get("/hello", (req, res) => { // req = requisição | res = resposta
    const { nome, idade } = req.query;

    return res.json({
        title: "Hello World",
        message: `Olá ${nome} tudo bem com você!?`,
        idade: idade
    });
}); // receber informações


// http://localhost:3000/hello/jeiel
// Route param = /hello/:nome

server.get("/hello/:nome", (req, res) => {
    const nome = req.params.nome;

    return res.json({
        title: "Hello World",
        message: `Olá ${nome} tudo bem!?`
    });
});


// Sempre colocar acima de 1024
server.listen(3000);
// Como: 3000, 5000, 8000 ou 8080
// 127.0.0.1
// localhost

const express = require('express');
const app = express();

app.get('/', (requisicao, response) => {
    response.send("Requisição get worked");
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000...');
})
const express = require('express');
const app = express();

const path = require('path');

const basePath = path.join(__dirname, 'templates');

app.get('/usuarios/:id', (req, resp) => {
    const id = req.params.id;
    console.log(`Usuário: ${id}`);
    resp.sendFile(`${basePath}/usuarios.html`)
})

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`);
})

app.listen(3000)
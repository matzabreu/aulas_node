const express = require('express');
const app = express();

const path = require('path');

const basePath = path.join(__dirname, 'templates');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

app.use(express.static('public'))

app.post('/usuarios/enviar', (req, resp) => {
    const nome = req.body.nome
    const email = req.body.email
    
    console.log(`Usuário: ${nome}\nEmail: ${email}`)
    resp.redirect('/');
})

app.get('/usuarios/cadastrar', (req, resp) => {
    resp.sendFile(`${basePath}/form.html`);
})

app.get('/usuarios/:id', (req, resp) => {
    const id = req.params.id;
    console.log(`Usuário: ${id}`);
    resp.sendFile(`${basePath}/usuarios.html`)
})

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`);
})


app.listen(3000)
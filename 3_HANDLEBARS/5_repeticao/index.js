const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//configurando o handlebars com o template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, resp) => {
    const items = ['item a', 'item b', 'item c']


    resp.render('dashboard', { items })
})

app.get('/', (req, res) => {
    const usuario = {
        nome: "Matheuzinho",
        profissao: "Desempregado",
        idade: 19
    }

    const auth = true

    res.render('home', { usuario, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})

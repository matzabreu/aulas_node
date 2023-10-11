const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//configurando o handlebars com o template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const usuario = {
        nome: "Lucas",
        profissao: "Desenvolvedor Front End",
        idade: 20
    }

    res.render('home', { usuario })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})

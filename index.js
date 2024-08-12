const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hola Mundo con Express JS")
})

app.listen(8080, () => {
    console.log('Servidor Funcionando')
})
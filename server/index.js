const express = require('express')
const app = express()
const bd_connect = require('./database/connection')
const routes = require("./routes/routes")


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

bd_connect()

const listener = app.listen(process.env.API_PORT || 8080, function () {
    console.log(`[BACKEND] - Servidor iniciado na porta: ${listener.address().port}`)
})
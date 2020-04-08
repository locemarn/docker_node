const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({name: 'Marcelo Nogueira da Silva'}))

app.listen(5000)
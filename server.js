const express = require('express')
const pokemon = require('./models/pokemon.js')
const app = express()
const port=3000

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})






app.listen(port, ()=>{
    console.log('Listening on port: ', port)
})
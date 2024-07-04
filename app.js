const express = require('express')
const morgan = require('morgan')
const app = new express
const port = 3000


app.use(morgan('dev'))

app.get('/',(req,res)=>res.send("hello node, express and nodemon"))
app.get('/api/pokemons/:id/:name',(req,res)=>{
    const id = parseInt(req.params.id)
    const name = req.params.name
    res.send(`${id} - ${name}`)
})
app.listen(port,()=> console.log(`Notre premiere application Node est demarée sur : http://localhost:${port}`))
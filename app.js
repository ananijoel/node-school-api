const express = require('express')

const app = new express
const port = 3000
app.get('/',(req,res)=>res.send("hello node, express and nodemon"))
app.listen(port,()=> console.log(`Notre premiere application Node est demarée sur : http://localhost:${port}`))
const express = require('express')

const app = new express
const port = 3000

app.listen(port,()=> console.log(`Notre premiere application Node est demarée sur : http://localhost:${port}`))
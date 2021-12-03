//principio básico - acessar documentação http://expressjs.com/pt-br/starter/hello-world.html
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('Olá mundo')
})

app.listen(port, ()=>{console.log(`Example app listening at http://localhost:${port}`)})

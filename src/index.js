//principio básico - acessar documentação http://expressjs.com/pt-br/starter/hello-world.html
const express = require('express')

const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.resolve() + '/src/views' ))


app.get('/',(req,res) =>{
    res.sendFile(path.resolve() + '/views/index.html')
})

app.listen(port, ()=>{console.log(`Example app listening at http://localhost:${port}`)})


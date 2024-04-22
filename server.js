require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./rotas/index')
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use('/api', api)

console.log(process.env.MONGO_PASS)

app.get('/', (req,res)=>{
    res.json({
        success: true
    })
})


app.listen(PORT)
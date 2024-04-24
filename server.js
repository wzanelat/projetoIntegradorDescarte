require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./rotas/index')
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use('/api', api)
//
//
if(process.env.NODE_ENV  === 'production'){
    app.use(express.static('frontend/build'))

    const path = require('path')
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}


app.listen(PORT)
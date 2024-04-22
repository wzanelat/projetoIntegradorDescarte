require('../mongoDB/mongoconn')

const router = require('express').Router()
const empresas = require('./empresas')

router.use('/empresas', empresas)

router.get('/', (req,res)=>{
    res.json({
        success: false,
        message: "Este é um acesso reservado!!!"
    })   
})

module.exports = router
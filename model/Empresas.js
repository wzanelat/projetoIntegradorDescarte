const mongoose = require('mongoose')
const slug = require('slug')
const{ Schema } = mongoose

const empresasSchema = new Schema({
    cnpj: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true, default: function(){return slug(this.cnpj)}},
    nome: {type: String, required: true},
    pesoDisponivel_kg: {type: Number, required: true},
    telefone: {type: Number, required: true},
    whatsapp: {type: Number, required: true}
})

module.exports = mongoose.model('empresas', empresasSchema)
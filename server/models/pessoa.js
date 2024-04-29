
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    tipoPessoa: {
        type: String, 
        maxLength: 20,
        required: true,
        /* enum: ['PF', 'PJ'], */
    },
    cpf : {
        type: String, 
        required: false,
    },
    cnpj: {
        type: String, 
        required: false,
    },
    nome: {
        type: String, 
        maxLength: 20,
        required: true,
    },
    sexo: {
        type: String, 
        required: false,
       /*  enum: ['m', 'f'], */
    },
    cargo: {
        type: String, 
        required: false,
       /*  enum: ['Estagiario', 'Tecnico','Gerente','Diretor','Presidente'], */
    },
    salario: {
        type: Number, 
        required: true,
    }
})

const pessoa = mongoose.model('pessoa', schema)

module.exports = pessoa
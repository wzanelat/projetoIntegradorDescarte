const router = require('express').Router()
const Empresa = require('../model/Empresas')

router.get('/', async (req,res)=>{
    try{
        const listaEmpresas = await Empresa.find()
        res.json({
            success: true,
            message: listaEmpresas
        })
    } catch {
        res.json({
            success: false,
            message: "Não foi possível listar as Empresas!!!"
        })
    }  
})

router.post('/', async (req,res)=>{
    const novaEmpresa = new Empresa({
        cnpj: req.body.cnpj,
        nome: req.body.nome,
        pesoDisponivel_kg: req.body.pesoDisponivel_kg, 
        telefone: req.body.telefone,
        whatsapp: req.body.whatsapp
    })
    try{
        const saveNovaEmpresa = await novaEmpresa.save()
        res.json({
            success: true,
            message: saveNovaEmpresa
        })
    } catch {
        res.json({
            success: false,
            message: "Não foi possível cadastrar a nova Empresa!!!"
        })
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const updateEmpresaId = await Empresa.updateOne(
            {_id: req.params.id},
            {cnpj: req.body.cnpj,
            nome: req.body.nome,
            pesoDisponivel_kg: req.body.pesoDisponivel_kg, 
            telefone: req.body.telefone,
            whatsapp: req.body.whatsapp}
        )
        res.json({
            success: true,
            updated: updateEmpresaId.nModified
        })

    } catch(err) {
        res.json({
            success: false,
            message: "Não foi possível atualizar a Empresa!!!"
        })
    }
})


router.delete('/:id', async(req,res)=>{
    try{
        const deleteEmpresaId = await Empresa.deleteOne({
            _id: req.params.id
        });
            res.json({
                success: true,
                data: deleteEmpresaId
            })
    } catch(err) {
        res.json({
            success: false,
            data: err
        })
    }
})

module.exports = router
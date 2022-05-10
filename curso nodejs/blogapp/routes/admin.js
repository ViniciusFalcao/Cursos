const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')

router.get('/', (req, res) => {
    res.render("admin/index")

})
router.get('/posts', (req, res) => {
    res.send('Página de posts')
})

router.get('/categorias', (req, res) => {
    Categoria.find().sort({ date: 'desc' }).lean().then((categorias) => {
        res.render('admin/categorias', { categorias: categorias })

    }).catch((erro) => {
        req.flash('error_msg', "Houve um erro aos listar as categorias")
        res.redirect('/admin')
    })

})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})
router.post('/categorias/nova', (req, res) => {

    var erros = []
    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({ texto: 'Nome inválido' })

    }
    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
        erros.push({ texto: 'Slug inválido' })

    }
    if (req.body.nome.length < 2) {
        erros.push({ texto: 'Nome da categoria é pequeno' })

    }

    if (erros.length > 0) {
        res.render('admin/addcategorias', { erros: erros })

    }


    if (erros.length <= 0) {
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
        new Categoria(novaCategoria).save().then(() => {
            req.flash('success_msg', 'Categoria criada com sucesso!')
            res.redirect('/admin/categorias')

        }).catch((erro) => {
            req.flash('error_msg', 'Erro ao cadastrar a categoria ,tente novamente!')
            res.redirect('/admin')

        })
    }

}



)
router.get('/categorias/edit/:id', (req, res) => {
    Categoria.findOne({_id:req.params.id}).lean().then((categoria)=>{
        res.render('admin/editcategoria',{categoria:categoria})

    }).catch((erro)=>{
        req.flash('error_msg','Esta categoria não existe')
        res.redirect('/admin/categorias')


    })
    



})

router.post('/categorias/edit',(req,res)=>{
    Categoria.findOne({_id:req.body.id}).then((categoria)=>{
        categoria.nome=req.body.nome
        categoria.slug=req.body.slug

        categoria.save().then(()=>{
            req.flash('success_msg','Categoria editada com sucesso')
            res.redirect('/admin/categorias')

        }).catch((erro)=>{
            req.flash('error_msg','Houve um erro interno ao salvar a categoria')
            res.redirect('/admin/categorias')

        })

    }).catch((erro)=>{
        req.flash('error_msg','Houve um erro ao editar categoria ')
        res.redirect('/admin/categorias')
    })

})

router.post('/categorias/deletar/:id',(req,res)=>{
    Categoria.findOneAndDelete({_id:req.params.id}).then(()=>{
        req.flash('success_msg','Categoria deletada com sucesso')
        res.redirect('/admin/categorias')

    }).catch((erro)=>{
        req.flash('error_msg','Houve um erro ao deletar as categorias')
        res.redirect('/admin/categorias')

    })

})

router.get('/postagens',(req,res)=>{
    res.render('admin/postagens')

})
router.get('/postagens/add',(req,res)=>{
    Categoria.find().lean().then((categorias)=>{
        res.render('admin/addpostagens',{categorias:categorias})

    }).catch((erro)=>{
        req.flash('error_msg','Houve um erro ao carregar o formulário')
        res.redirect('/admin')

    })
    

})
module.exports = router
import express from 'express'
import db from '../datos/articulos'
const router = express.Router()
router
    .get('/', (req, res, next) => {
        res
            .status(200)
            .json(db)
       

    })
    .post('/', (req, res, next) => {
    console.log("Entrando en el post del servidor");
        console.log('Body recived', req.body);
        db.push(req.body)
        res
            .status(201)
            .json(req.body)
    })


router.get('/:categoria', (req, res, next) => {
    const articuloByCategoria = db.filter(
        item => item.categoria.toLocaleLowerCase() == req.params.categoria.toLocaleLowerCase())
    res
        .status(200)
        .json(articuloByCategoria)
})

export default router
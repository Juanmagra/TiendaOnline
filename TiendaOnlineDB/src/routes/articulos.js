import { token } from '../services/passport/index';
import { ArticuloController } from '../controllers/articulo';
import { Router } from 'express';
const router = Router()

router.get('/',ArticuloController.todosLosArticulos);
router.post('/', token(), ArticuloController.crearNuevoArticulo);


router.get('/:categoria', (req, res, next) => {
    const articuloByCategoria = ArticuloController.todosLosArticulos.filter(
        item => item.categoria.toLocaleLowerCase() == req.params.categoria.toLocaleLowerCase())
    res
        .status(200)
        .json(articuloByCategoria)
})

export default router;
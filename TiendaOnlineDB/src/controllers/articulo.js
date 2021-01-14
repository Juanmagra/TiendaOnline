import {articuloRepository } from '../datos/articulos';
import {Articulo} from '../models/articulos';

export const ArticuloController = {

    todosLosArticulos: (req, res) => res.json(articuloRepository.findAll()),

    unArticuloPorId: (req, res) => {
        var articulo = articuloRepository.findById(req.params.id);
        if (articulo != undefined)
            res.json(post);
        else
            res.sendStatus(404);
    },


    crearNuevoArticulo: (req, res) => {
        // No hace falta que nos proporcionen el ID del usuario.
        // Lo tomamos directamente de la autenticación vía JW
        var articulo = new Articulo(req.body.nombre, req.body.descripcion, req.body.foto, 
            req.body.categoria, req.body.precio);
        var articuloCreado = articuloRepository.create(articulo);
        res.status(201).json(articuloCreado);
    }
}
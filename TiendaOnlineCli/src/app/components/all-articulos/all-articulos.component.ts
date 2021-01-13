import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/interfaces/articulo.interface';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-all-articulos',
  templateUrl: './all-articulos.component.html',
  styleUrls: ['./all-articulos.component.scss'
  ]
})
export class AllArticulosComponent implements OnInit {


  listArticulos: Articulo[] = []
  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.loadArticulos()
  }

  loadArticulos() {
    //Local
    for (let index = 0; index < 10; index++) {
      let id = index + 1
      this.listArticulos.push(
        new Articulo(id, "Corona élfica", 50, "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum.Vivamus  lesuada tristique.",
          0, [], "Coronas", 10, false, false));
    }
    // Remoto
    // this.articulosService.allArticulos().subscribe(resp=>{
    //   resp.forEach(arti => {
    //     this.listArticulos.push(arti)
    //   });
    // });
  }

}

let articulos = [
  {
    nombre: "Corona de alto elfo",
    categoria: "Coronas",
    comentario: [],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,

    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Coronas",
    comentario: [
      "idComentario1",
      "idComentario2"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 5,
    foto: "https://i.ebayimg.com/images/g/-ZYAAOSwsq1cf7dX/s-l400.jpg",
    meGusta: 10,
    nombre: "Corona de alto elfo",
    precio: 50,
    rebajado: false,
    retirado: false
  },
  {
    categoria: "Orejera",
    comentario: [
      "idComentario3",
      "idComentario4"],
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida tincidunt interdum. Vivamus vel magna congue, consectetur lectus vitae, porta nisl. Fusce posuere nunc pulvinar malesuada tristique.",
    enStock: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlz1cN45Fxab8i1pNg0FV2saLlTzs62Br6w&usqp=CAU",
    meGusta: 50,
    nombre: "Orejas de elfo oscuro",
    precio: 25,
    rebajado: false,
    retirado: false
  }]



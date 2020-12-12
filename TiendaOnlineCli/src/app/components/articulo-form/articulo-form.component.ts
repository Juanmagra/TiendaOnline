import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/interfaces/articulo.interface';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent implements OnInit {

  artForm: Articulo = new Articulo();
  artPrview: Articulo = new Articulo();
  listaCategorias= ['Coronas', 'Orejeras']

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
  }


  nuevoArticulo(){
    console.log("Entrando al post del cliente");
    this.artForm.enStock=1
    this.artForm.meGusta=0
    this.artForm.rebajado=false
    this.artForm.retirado=false
    this.articulosService.nuevoArticulo(this.artForm).subscribe(resp=>{
        console.log(resp);

    });
  }

  generatePreview(selector, visible): void {

    this.artPrview.categoria=this.artForm.categoria
    this.artPrview.nombre = this.artForm.nombre
    this.artPrview.descripcion = this.artForm.descripcion
    this.artPrview.foto = this.artForm.foto

    var elemento = document.querySelector(selector);
    if (elemento != null) {
      elemento.style.display = visible?'block':'none';
    }
    var selector2 = '#reset';
    var elemento2:any = document.querySelector(selector2);
    if(elemento2!=null){
     elemento2.style.display = false?'block':'none';

    }
  }

  resetearPreview():void{
    var elemento:any = document.querySelector('#preview');
    elemento.style.display = false?'block':'none';
    var elemento2:any = document.querySelector('#reset');
    elemento2.style.display = true?'block':'none';
  }
  }

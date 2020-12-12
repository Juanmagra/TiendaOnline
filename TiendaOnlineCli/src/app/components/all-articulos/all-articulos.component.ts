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


  listArticulos:Articulo[] = []
  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.loadArticulos()
  }

  loadArticulos(){
    this.articulosService.allArticulos().subscribe(resp=>{
      resp.forEach(arti => {
        this.listArticulos.push(arti)
      });
    });
  }

}

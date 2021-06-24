import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubicacion-museo',
  templateUrl: './ubicacion-museo.component.html',
  styleUrls: ['./ubicacion-museo.component.css']
})

export class UbicacionMuseoComponent implements OnInit { 
  
  //indicamos de que tipo serán las variables:
  lat: number = 0;
  lng: number = 0;
  zoom:number =14;
  
  nombre: string = '';
  id:number= 0;
  direccion:string= '';

  //construimos nuestras variables con los datos que debe coger:
  constructor(private ruta:ActivatedRoute) { 
    this.lat = parseFloat(this.ruta.snapshot.queryParams.latitud);
    this.lng =parseFloat(this.ruta.snapshot.queryParams.longitud);
    this.nombre = this.ruta.snapshot.queryParams.museo;
    this.id =parseInt(this.ruta.snapshot.queryParams.id);
    this.direccion = this.ruta.snapshot.queryParams.direccion;    
  }

  ngOnInit(): void {
  }

}

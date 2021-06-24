import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museo } from 'src/app/models/museo';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.css']
})
export class MuseosComponent implements OnInit {
    
  id: number= 0;

  museos: any = [
    {id: 1, nombre:'El Prado', resumen: 'Inaugurado en 1819. Exposición principal permanente. Madrid'},
    {id: 2, nombre:'Reina Sofia', resumen:'Inaugurado en 1992. Sede del Gernika de Picasso. Madrid'},
    {id: 3, nombre:'Biblioteca Nacional', resumen:'Inaugurada en 1711. Custodia unos 30 millones de publicaciones. Madrid'},   
    {id: 4, nombre:'Thyssen-Bornemisza', resumen:'Inaugurado en 1992. Colecciones privadas de diferentes estilos. Madrid'},    
    {id: 5, nombre:'Real Academia de Bellas Artes de San Fernando', resumen:'Inaugurada en 1711. Academia de bellas artes, museo y academia nacional. San Fernando de Henares.'},   
    {id: 6, nombre:'Arqueológico', resumen:'Inaugurado en 1871. Su colección se basa en piezas de la península ibérica, desde la Prehistoria hasta la Edad Moderna. Madrid'},    
    {id: 7, nombre:'Ciencias Naturales', resumen:'Inaugurado en 1711. Dedicado al estudio y difusión de las ciencias naturales. Madrid'},
    {id: 8, nombre:'Traje', resumen:'Inaugurado en 1925. Recoge la evolución histórica de la indumentaria de los pueblos de España. Madrid'},
    {id: 9, nombre:'Ciencias y Tecnologia', resumen:'Inaugurado en 1980. Posee una colección de más de 15000 instrumentos científicos que datan desde el siglo XVI hasta la actualidad. Madrid'},
    {id: 10, nombre:'Casa de Lope de Vega', resumen:'Inaugurada en 1935. Representa la típica vivienda S.XVII. El poeta vivió en ella los últimos 25 años de su vida. Madrid'},
    {id: 11, nombre:'Cera', resumen:'Inaugurado en 1972. No sé si es un museo del terror o un museo serio, al menos es curioso. Madrid'},
    {id: 12, nombre:'Dibujo e Ilustracción', resumen:'Inaugurado en 2010. Colección privada de dibujos e ilustraciones que fue creado para conservar y divulgar la Colección ABC. Madrid'},
    {id: 13, nombre:'Imprenta Municipal-Artes del libro', resumen:'Inaugurada en 2011. Dedicada a la historia de la imprenta, del libro y de las artes asociadas a ellos. Madrid'},
    {id: 14, nombre:'Naval', resumen:'Inaugurado en 1843. Piezas, conjuntos y colecciones de valor histórico, artístico, científico y técnico relacionados con la actividad naval.Madrid'},
    {id: 15, nombre:'Sorolla', resumen:'Inaugurado en 1932. Emplazamiento que serviría de taller y vivienda a Joaquín Sorolla. Madrid'},
    {id: 16, nombre:'De las Ilusiones', resumen:'Inagurado en 2020. Con el fin de recopilar y mostrarnos todos esos efectos visuales mágicos. Madrid'},  
  ];

  constructor(private ruta: ActivatedRoute) {
    console.log(this.ruta.snapshot.params.codigo);
    this.id = this.ruta.snapshot.params.codigo; 

  }

  buscarMuseo(): Museo{
    //Filtar el Array por aquellos elementos cuyo id sea igual al id recibido como parámetro
    //Como al filtrar el array me devuelve otro array, me quedo sólo con el primer elemento
    return this.museos.filter( (item) => {
      return item.id == this.id
    })[0];
  }

  ngOnInit() {
  }

}

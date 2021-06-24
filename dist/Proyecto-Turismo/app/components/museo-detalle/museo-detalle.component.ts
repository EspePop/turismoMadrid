import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museo } from 'src/app/models/museo';

@Component({
  selector: 'app-museo-detalle',
  templateUrl: './museo-detalle.component.html',
  styleUrls: ['./museo-detalle.component.css']
})
export class MuseoDetalleComponent implements OnInit { 

  id = 0;
  museo: Museo = null;

  museos: Museo[] = [
    {id: 1, nombre:'Museo del Prado', telefono:'91 330 28 00', direccion:'Calle de Ruiz de Alarcón, 23, 28014 Madrid', horario:'10:00 – 20:00h', imagen:'../../../assets/museum/1.png', web:'https://www.museodelprado.es/', coordenadas:[40.4137818,-3.6921271], precio:15, abierto:true, resumen: 'Inaugurado en 1819. Exposición principal permanente.'},
    {id: 2, nombre:'Reina Sofia', telefono:'91 774 10 00', direccion:'Calle de Santa Isabel, 52, 28012 Madrid', horario:'10:00 - 21:00h', imagen:'../../../assets/museum/2.png', web:'www.museoreinasofia.es', coordenadas:[40.408644,-3.693992], precio:15, abierto:true, resumen:'Inaugurado en 1992. Sede del Gernika de Picasso.'},
    {id: 3, nombre:'Biblioteca Nacional', telefono:'91 516 89 67 / 91 580 77 59', direccion:'Paseo de Recoletos, 20-22. 28071. Madrid', horario:'10:00 - 20:00h', imagen:'../../../assets/museum/3.png', web:'http://www.bne.es/es/MuseoBibliotecaNacional/', coordenadas:[40.42348498519113, -3.6910447306827954], precio:0, abierto:true, resumen:'Inaugurada en 1711. Custodia unos 30 millones de publicaciones.'},   
    {id: 4, nombre:'Museo Thyssen', telefono:'91 791 13 70', direccion:"Paseo del Prado, 8", horario:'10:00 a 19:00',imagen:'../../../assets/museum/4.png',web:'https://www.museothyssen.org/', coordenadas:[40.416137331924666, -3.694930865545187],precio:13,abierto:true, resumen:'Inaugurado en 1992. Colecciones privadas de diferentes estilos.'},
    {id: 5, nombre:'RA de BB.AA de S.Fernando', telefono:'91 524 08 64', direccion: 'Alcalá, 13 28014 Madrid', horario:'10:00 - 15:00h', imagen:'../../../assets/museum/5.png', web:'https://www.realacademiabellasartessanfernando.com/es', coordenadas:[40.4180405,-3.7029775], precio:8, abierto:true, resumen:'Inaugurada en 1711. Academia de bellas artes, museo y academia nacional.'},
    {id: 6, nombre:'Museo Arqueológico', telefono:'91 577 79 12', direccion:'Calle de Serrano, 13, 28001 Madrid', horario:'9:30–20:00',imagen:'../../../assets/museum/6.png',web:'http://www.man.es/man/home.html', coordenadas:[40.423553,-3.689402], precio:3,abierto: true, resumen:'Inaugurado en 1871. Su colección se basa en piezas de la península ibérica, desde la Prehistoria hasta la Edad Moderna.'},
    {id: 7, nombre:'Museo de Ciencias Naturales', telefono:'91 411 13 28', direccion:'Calle de José Gutiérrez Abascal, 2, 28006 Madrid', horario: '10.00 - 17.00h', imagen: '../../../assets/museum/7.png', web: 'www.mncn.csic.es/es', coordenadas: [40.4404062, -3.6912279], precio: 7, abierto: true, resumen:'Inaugurado en 1711. Dedicado al estudio y difusión de las ciencias naturales.'},
    {id: 8, nombre:'Museo del Traje', telefono:'91 550 47 00', direccion:'Avenidade Juan de Herrera, 228040', horario:'9:30 - 19:00h', imagen:'../../../assets/museum/8.png', web:'http://www.culturaydeporte.gob.es/mtraje/inicio.html', coordenadas:[40.4400972,-3.7318693], precio:3, abierto:true, resumen:'Inaugurado en 1925. Recoge la evolución histórica de la indumentaria de los pueblos de España.'},
    {id: 9, nombre:'Museo de Ciencias y Tecnologia',telefono:'91 425 09 19', direccion:'Parque de Andalucia. C/Pintor Velázquez,5 28100 Alcobendas, Madrid',horario:'11:00-19:00',imagen:'../../../assets/museum/9.png',web:'http://www.muncyt.es/',coordenadas:[40.5375439,-3.643642],precio:3.0,abierto:true, resumen:'Inaugurado en 1980. Posee una colección de más de 15000 instrumentos científicos que datan desde el siglo XVI hasta la actualidad.'},
    {id: 10, nombre:'Museo de Lope de Vega', telefono:'91 429 92 16', direccion:'Calle de Cervantes, 11,28014 Madrid', horario:'Mar-Dom: 10:00 - 18:00',imagen:'../../../assets/museum/10.png',web:'http://casamuseolopedevega.org/es/',coordenadas:[40.3980385,-3.7054334],precio: 0,abierto:true, resumen:'Inaugurada en 1935. Representa la típica vivienda S.XVII. El poeta vivió en ella los últimos 25 años de su vida.'},
    {id: 11, nombre:'Museo de Cera', telefono:'91 319 93 30', direccion:'Plaza de Colón, 1', horario:'11:00–19:00',imagen:'../../../assets/museum/11.png',web:'https://www.museodecerademadrid.com', coordenadas:[40.4250641,-3.6935975,],precio:18,abierto:true, resumen:'Inaugurado en 1972. No sé si es un museo del terror o un museo serio, al menos es curioso.'},
    {id: 12, nombre:'Museo de Dibujo e Ilustracción', telefono:'91 758 83 79', direccion:'Calle de Amaniel 29-31. 28015 Madrid', horario:'Cerrado Temporalmente',imagen:'../../../assets/museum/12.png',web:'https://museo.abc.es/',coordenadas:[40.4276904,-3.7117588],precio:0,abierto:false, resumen:'Inaugurado en 2010. Colección privada de dibujos e ilustraciones que fue creado para conservar y divulgar la Colección ABC.'},
    {id: 13, nombre:'Museo de la imprenta', telefono:'91 429 48 81', direccion:'Calle de Concepción Jerónima, 15, 28012 Madrid', horario:'10:00-20:00', imagen:'../../../assets/museum/13.png',web:'https://museomadrid.com/imprenta-municipal-artes-del-libro/', coordenadas:[40.4138972,-3.7054722,15], precio: 0,abierto: true, resumen:'Inaugurada en 2011. Dedicada a la historia de la imprenta, del libro y de las artes asociadas a ellos.'},
    {id: 14, nombre:'Museo Naval', telefono:'91 523 85 16', direccion:'Paseo del Prado, 3 28014', horario:'Mar - Dom: 10:00 - 19:00 h ',imagen:'../../../assets/museum/14.png', web:'https://www.esmadrid.com/informacion-turistica/museo-naval', coordenadas:[40.41851257605143, -3.6928194306791697], precio: 3,abierto: true, resumen:'Inaugurado en 1843. Piezas, conjuntos y colecciones de valor histórico, artístico, científico y técnico relacionados con la actividad naval.'},
    {id: 15, nombre:'Museo Sorolla', telefono:'91 310 15 84', direccion:'Paseo del General Martinez Campos, 37, 28010 Madrid', horario:'9:30-20:00',imagen:'../../../assets/museum/15.png',web:'https://www.culturaydeporte.gob.es/msorolla/inicio.html',coordenadas:[40.4354555,-3.6947111],precio:3,abierto:true, resumen:'Inaugurado en 1932. Emplazamiento que serviría de taller y vivienda a Joaquín Sorolla.'},
    {id: 16, nombre:'Museo de la Ilusion', telefono:'911 03 34 55', direccion:'Calle del Dr. Cortezo 8', horario:'Cierra a las 22:00', imagen:'../../../assets/museum/16.png', web:'https://www.museumofilusions.es', coordenadas:[40.4134667,-3.7060788],precio:15,abierto:true, resumen:'Inagurado en 2020. Con el fin de recopilar y mostrarnos todos esos efectos visuales mágicos.'}
  ];

  constructor(private ruta: ActivatedRoute) {
    console.log(this.ruta.snapshot.params.codigo);
    this.id = this.ruta.snapshot.params.codigo; 
    this.museo = this.buscarMuseo();   
  }

  buscarMuseo(): Museo{
    //Filtar el Array por aquellos elementos cuyo id sea igual al id recibido como parámetro
    //Como al filtrar el array me devuelve otro array, me quedo sólo con el primer elemento
    return this.museos.filter( (item) => {
      return item.id == this.id
    })[0];
  }

  ngOnInit(): void {
  }

}

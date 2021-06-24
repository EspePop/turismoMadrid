import { Injectable } from '@angular/core';
import { Ruta } from '../models/ruta';


@Injectable({
  providedIn: 'root'
})

export class RutasService {

  rutas: Ruta[] = [
    {id: 1, nombre: 'Ruta Baztán', duracion:2, dificultad:'Baja/Media', ubicacion:'Nuevo Baztán', coordenadas:[40.36601420523865, -3.2427064203065084], detalle:'Ruta circular de 9,3 km. Altitud: 716 - 839 metros. Recomendaciones: evitar días muy calurosos.', imagen:'../../../assets/routes/ruta1.jpg', web: 'http://turismo.ayto-nuevobaztan.es/'},
    {id: 2, nombre: 'Cascada del Purgatorio', duracion:2, dificultad:'Alta',ubicacion:'Monasterio del Paular, Rascafria', coordenadas:[40.8491773,-3.8622185], detalle:'La mejor época para realizarla es durante el deshielo, cuando las cascadas llevan mayor cantidad de agua.', imagen:'./../../assets/routes/ruta2.jpg', web: 'http://www.senderismomadrid.es/cascadas-purgatorio/'},   
    {id: 3, nombre: 'Embalse del Picadas', duracion:3, dificultad:'Baja', ubicacion:'Pelayos de la presa', coordenadas:[40.3332076,-4.2513864], detalle:'Tranquila, relajante y bella ruta por el Embalse de Picadas hasta su presa,',imagen:'../../../assets/routes/ruta3.jpg', web: 'https://andoyreando.com/madrid/ruta-picadas-via-verde-alberche/'},
    {id: 4, nombre: 'Laguna del Campillo', duracion:2, dificultad: 'fácil', ubicacion: 'Rivas-Vaciamadrid', coordenadas: [40.3207381,-3.5107996], detalle: 'Ruta circular, finaliza en un centro medio ambiental.', imagen: '../../../assets/routes/ruta4.jpeg', web: 'https://www.exploraturuta.com/ruta-al-puente-verde-y-la-laguna-de-rivas/'},
    {id: 5, nombre: 'Subida al Cancho de la Cabeza', duracion: 4, dificultad:'media-alta', ubicacion: 'Patones', coordenadas: [40.896158, -3.4820799], detalle:'Ruta de 12km de longitud. Recorrido algo exigente por la distancia, pero muy recomendable por las vistas panorámicas.', imagen: '../../../assets/routes/ruta5.jpg', web: 'https://www.sierranortemadrid.org/subida-al-cancho-de-la-cabeza/'},  
    {id: 6, nombre: 'Ruta del Hoyo Cerrado', duracion:6, dificultad:'Media', ubicacion:'Rascafría', coordenadas:[40.97408391637272, -3.872846756842427], detalle:'Es una ruta sencilla que permitirá conocer el único circo glaciar de esta zona',imagen:'../../../assets/routes/ruta6.jpg', web: 'https://es.wikiloc.com/rutas-senderismo/hoyo-cerrado-20604657'},
    {id: 7, nombre: 'Chorros del Manzanares', duracion:4.5, dificultad:'fácil', ubicacion:'Canto Cochino - Manzanares el Real',coordenadas:[40.7760645,-3.959401], detalle:'Un bello recorrido por el río manzanares, los chorros son un conjunto de pequeñas cascadas en hilera.', imagen:'../../../assets/routes/ruta7.jpg', web: 'https://elmiradordemadrid.es/ruta-a-los-chorros-del-manzanares-en-la-pedriza/'},    
    {id: 8, nombre: 'La Pedriza', duracion:4, dificultad:'facil', ubicacion:'Manzanares el Real', coordenadas:[40.7726009, -3.8708617], detalle:'La Pedriza es un gran batolito granítico situado en la vertiente sur de la sierra de Guadarrama, dentro del municipio español de Manzanares el Real,', imagen:'../../../assets/routes/ruta8.jpg', web: 'https://www.blogbrandsmountain.com/las-mejores-rutas-de-la-pedriza/'},
    {id: 9, nombre: 'Laguna Grande de Peñalara', duracion:3, dificultad: 'fácil', ubicacion: 'Sierra de Guadarrama - Macizo de Peñalara', coordenadas: [40.8398829,-3.9596276], detalle: 'Ruta familiar, nunca mejor dicho en familia, desde puerto de Cotos inicio por el Camino del Agua, y final por la parte baja de las Zetas de la Hermana Menor, de forma circular, por el circo de Peñalara.', imagen: '../../../assets/routes/ruta9.jpg', web: 'http://www.senderismomadrid.es/laguna-grande-penalara/'},
    {id:10, nombre: 'Siete Picos', duracion:5, dificultad:'facil', ubicacion:'Navacerrada', coordenadas:[40.7816648,-4.0497318], detalle:'Los Siete Picos es una formación montañosa de la sierra de Guadarrama, en el sistema Central de la península ibérica, situada en el límite entre las provincias españolas de Madrid y Segovia.', imagen:'../../../assets/routes/ruta10.jpg', web: 'https://viajeros30.com/2018/01/28/ruta-de-los-siete-picos-navacerrada/'}  
  ];

  constructor() {}

  public getAll(): Ruta[]{
    return this.rutas;
  }

  public buscarRuta(id: number): Ruta{
    return this.rutas.filter((item) => {
    return id == item.id;
    })[0];
  }
}

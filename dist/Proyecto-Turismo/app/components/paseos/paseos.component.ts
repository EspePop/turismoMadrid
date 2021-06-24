import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaseosService } from 'src/app/services/paseos.service';


@Component({
  selector: 'app-paseos',
  templateUrl: './paseos.component.html',
  styleUrls: ['./paseos.component.css']
})

//importar el módulo en la clase de componente: FormBuilder.
  //https://code.tutsplus.com/es/tutorials/angular-form-validation-with-reactive-and-template-driven-forms--cms-32131

  //FormBuilder facilita el andamiaje, especialmente cuando se construyen formularios complejos. 
  //Usaremos el método group() disponible en FormBuilder para crear la instancia  FormGroup 
  //y luego agregar controles de formulario como un objeto.

export class PaseosComponent implements OnInit {

  paseos: any [] = null;
  id: string= "";
  paseo: any;
  activarModificacion: boolean = false;

  //Creamos un nuevo paseo para poder modificar los datos en modificar();
  paseoForm = new FormGroup({
    nombre: new FormControl (['',Validators.required, Validators.maxLength(20)]),
    ubicacion: new FormControl ('', Validators.maxLength(20)),
    precio: new FormControl (0, Validators.pattern('[0-9]{1,3}')),
    resumen: new FormControl('', Validators.maxLength(100)),
    web: new FormControl ('')
  });

  
  //Usemos ahora FormBuilder para construir nuestros modelos de formulario.
  constructor(private paseosService: PaseosService, private formBuilder: FormBuilder, afs: AngularFirestore) { 
    //usamos la API de FormBuilder y agregamos nuestros campos de formulario en un objeto del html (ngModel required)
    this.paseoForm = formBuilder.group({
      nombre: '',
      ubicacion: '',
      precio: 0,
      resumen: '',
      web: ''
    });  
  }
  
  //Buscamos haciendo click en el botón del HTML introduciendo el id:
  buscar(){
    this.paseosService.buscarPaseo(this.id).subscribe((item) =>{
      this.paseo = item.payload.data();      
    });
  }

  //Borramos un amigo entero
  borrar(){
    this.paseosService.borrarPaseo(this.id).then(()=>{
      window.alert("Paseo eliminado paseo: " + this.id);
      this.id = " ";
    }, (error) => {
      console.log(error);
      window.alert("No se pudo borrar el usuario");
    });
  }

  //Mostramos form para poder modificar datos
  modificar(){    
    this.activarModificacion = true;
    this.paseoForm.setValue({
      nombre: this.paseo.nombre,
      ubicacion: this.paseo.ubicacion,
      precio: this.paseo.precio,
      resumen: this.paseo.resumen,
      web: this.paseo.web
    });
  }

  //Guardamos los datos que hemos modificado:
  guardar(){
    this.paseosService.modificarPaseo(this.id, this.paseoForm.value).then(()=>{      
      window.alert("Paseo modificado");
      this.id = "";
      this.paseoForm.reset();
    }, (error) => {
      console.log(error);  
    });
    this.activarModificacion = false;
  }

  //Alta de nuevo paseo
  alta(){    
    //El último bit será implementar la función que decide qué sucede cuando se envía el formulario.
    if (this.paseoForm.valid) {
      console.log(this.paseoForm.value);      
      this.paseosService.altaPaseo(this.paseoForm.value).then(()=>{
        window.alert("Paseo creado");
        this.paseoForm.reset();
        //Redirigir hacia otro componente
        window.location.href = "/paseos";
      });
    } else{
      alert("Ningún campo puede estar vacío");
  }  
}
  
  //Sacamos la petición al servicio fuera del constructor
  //para que no se quede congelada la pantalla (asincronía).
  ngOnInit(){
    this.paseosService.todosPaseos().subscribe((datos) => {

      // Limpiamos el array
      this.paseos = [];

      //Recorro los datos recibidos y los agrego a mi array de Paseos
      datos.forEach(element => {
        //nos traemos los datos de la web
        let data = element.payload.doc.data();
        //nos traemos el id de la web:
        let ident = element.payload.doc.id;
        this.paseos.push({
          id:ident,
          nombre: data.nombre,
          precio: data.precio,
          resumen: data.resumen,
          web: data.wed
        });

      });
      console.log(this.paseos);
              
  });
  }

}

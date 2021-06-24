import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaseosService {

  constructor(private angularFirestore: AngularFirestore) {}
  
    public todosPaseos(): any{
      return this.angularFirestore.collection('paseos').snapshotChanges(); //snapshotChange() -> cambios automáticos
    }
  
    public buscarPaseo(id:string): any{
       return this.angularFirestore.collection('paseos').doc(id).snapshotChanges(); //doc(id) -> buscamos en el documento por id
    }
  
    public altaPaseo(nuevo: any): any{
      return this.angularFirestore.collection('paseos').add(nuevo); //add(nuevo) -> añadimos nuevo contacto
    }
    
    public borrarPaseo(id:string): any{
      return this.angularFirestore.collection('paseos').doc(id).delete(); //delete() -> borramos un contacto buscando por id
    }
  
    public modificarPaseo(id:string, data:any): any{
      return this.angularFirestore.collection('paseos').doc(id).set(data); //doc(id).set(data) -> buscamos por id y añadimos el nuevo dato
    }
   
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  logado: boolean = false;

  constructor(private angularFireAuth: AngularFireAuth) { }
  
  login(email:string, pw: string){
    return this.angularFireAuth.signInWithEmailAndPassword(email,pw);
  }

  registro(email:string, pw: string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email,pw);
  }

  logOut(){
    return this.angularFireAuth.signOut();
  }

  //para comprobar si alguien está logado
  comprobar(){
    return this.angularFireAuth.authState;
  }
}

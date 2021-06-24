import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})

export class RegistroComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  registro: boolean = false; // true-> registro; false -> login;
  logado: boolean = this.loginService.logado;

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login(this.email, this.password).then((data) => {
        window.alert('Usuario correcto');
        this.email = '';
        this.password = '';

        //comprobar si estamos logados        
        this.loginService.comprobar().pipe(first()).pipe(tap((user) => {
          if (user) {
            this.loginService.logado = true;
          } else {
            this.loginService.logado = false;
          }
          this.logado = this.loginService.logado;
        })).subscribe(); 
                 
      }, (error) => {
        console.log(error);
        window.alert('Usuario no valid');
      });
  }

  logOut() {
    this.loginService.logOut();
    window.alert('¡¡Hasta pronto!!');   
    this.loginService.logado = false;        
    this.logado = this.loginService.logado;

    //Redirigir hacia otro componente:
    window.location.href = '/home';  
  }

  registrar() {
    if (this.password == this.confirmPassword) {
      this.loginService.registro(this.email, this.password).then(
        (data) => {
          alert('Usuario registrado');
        },
        (error) => {
          console.log(error);
          alert('Error de registro');
        }
      );
    } else {
      alert('El password y la confirmacion no coinciden');
    }
    this.registro = false;
  }

  ngOnInit(): void {}
}

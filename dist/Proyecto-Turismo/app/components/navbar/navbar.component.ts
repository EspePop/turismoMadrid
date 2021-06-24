import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idioma: string = 'es';

  constructor(private translateService: TranslateService){
    this.translateService.use(this.idioma);
  }

  cambiarIdioma(nuevoIdioma: string){
    this.idioma = nuevoIdioma;
    this.translateService.use(this.idioma);
  }  

  ngOnInit(): void {
  }

}

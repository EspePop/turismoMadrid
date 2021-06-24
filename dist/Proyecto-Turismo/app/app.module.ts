import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MuseosComponent } from './components/museos/museos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { MuseoDetalleComponent } from './components/museo-detalle/museo-detalle.component';
import { UbicacionMuseoComponent } from './components/ubicacion-museo/ubicacion-museo.component';
import { RutaDetalleComponent } from './components/ruta-detalle/ruta-detalle.component';
import { UbicacionRutaComponent } from './components/ubicacion-ruta/ubicacion-ruta.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PaseosComponent } from './components/paseos/paseos.component';

import { RutasService } from './services/rutas.service';
import { LoginService } from './services/login.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './components/registro/registro.component';

const misRutas: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'museos', component: MuseosComponent},
  {path: 'museos/:codigo', component: MuseosComponent},
  {path: 'rutas', component: RutasComponent},
  {path: 'museo_detalle/:codigo', component: MuseoDetalleComponent},
  {path: 'ubicacion_museo', component: UbicacionMuseoComponent},
  {path: 'ruta_detalle/:codigo', component: RutaDetalleComponent},
  {path: 'ubicacion_ruta/:codigo', component: UbicacionRutaComponent}, 
  {path: 'paseos', component: PaseosComponent},
  {path: 'registro', component: RegistroComponent},
  //Estas rutas siempre tienen que ser las últimas:
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
    MuseosComponent,
    RutasComponent,
    MuseoDetalleComponent,
    UbicacionMuseoComponent,
    RutaDetalleComponent,
    UbicacionRutaComponent,
    PaseosComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(misRutas),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [
    RutasService, 
    AngularFirestore, 
    AngularFireAuthModule, 
    AngularFireModule,
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
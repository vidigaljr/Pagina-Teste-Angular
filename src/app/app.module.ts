import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './sharpage/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './sharpage/footer/footer.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { rootRouterConfig } from './sharpage/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobreComponent,
    MenuComponent,
    FooterComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

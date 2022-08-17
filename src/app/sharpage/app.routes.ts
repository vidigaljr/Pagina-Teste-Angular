import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { SobreComponent } from '../pages/sobre/sobre.component';
import { ContatoComponent } from '../pages/contato/contato.component';
import { NavbarComponent } from '../sharpage/navbar/navbar.component';
import { FooterComponent } from '../sharpage/footer/footer.component';




export const rootRouterConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'contato', component: ContatoComponent},

];

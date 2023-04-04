import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarButtonComponent } from './navbar/navbar-button/navbar-button.component';
import { AboutComponent } from './about/about.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "pictures", component: PicturesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarButtonComponent,
    AboutComponent,
    PicturesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

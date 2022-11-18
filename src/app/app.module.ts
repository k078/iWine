import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BottleListComponent } from './components/bottle/bottle-list/bottle-list.component';
import { BottleDetailsComponent } from './components/bottle/bottle-details/bottle-details.component';
import { CellarDetailsComponent } from './components/cellar/cellar-details/cellar-details.component';
import { CellarListComponent } from './components/cellar/cellar-list/cellar-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BottleListComponent,
    BottleDetailsComponent,
    CellarDetailsComponent,
    CellarListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

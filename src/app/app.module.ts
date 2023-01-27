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
import { AboutComponent } from './components/about/about.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { CellarUpdateComponent } from './components/cellar/cellar-update/cellar-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CellarAddComponent } from './components/cellar/cellar-add/cellar-add.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BottleListComponent,
    BottleDetailsComponent,
    CellarDetailsComponent,
    CellarListComponent,
    AboutComponent,
    UserListComponent,
    UserDetailsComponent,
    CellarUpdateComponent,
    CellarAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

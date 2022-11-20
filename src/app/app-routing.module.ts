import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottleDetailsComponent } from './components/bottle/bottle-details/bottle-details.component';
import { BottleListComponent } from './components/bottle/bottle-list/bottle-list.component';
import { CellarListComponent } from './components/cellar/cellar-list/cellar-list.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'bottle', component: BottleListComponent },
  { path: 'cellar', component: CellarListComponent },
  { path: 'bottle/:WinebottleId', component: BottleDetailsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

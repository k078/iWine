import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottleDetailsComponent } from './components/bottle/bottle-details/bottle-details.component';
import { BottleListComponent } from './components/bottle/bottle-list/bottle-list.component';
import { CellarListComponent } from './components/cellar/cellar-list/cellar-list.component';
import { AboutComponent } from './components/about/about.component';
import { CellarDetailsComponent } from './components/cellar/cellar-details/cellar-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { CellarUpdateComponent } from './components/cellar/cellar-update/cellar-update.component';
import { CellarAddComponent } from './components/cellar/cellar-add/cellar-add.component';

const routes: Routes = [
  { path: 'bottle', component: BottleListComponent },
  { path: 'bottle/:WinebottleId', component: BottleDetailsComponent },
  { path: 'cellar', component: CellarListComponent },
  { path: 'cellar/:CellarId', component: CellarDetailsComponent },
  { path: 'cellar/update/:CellarId', component: CellarUpdateComponent },
  { path: 'cellar/add/form', component: CellarAddComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:UserId', component: UserDetailsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

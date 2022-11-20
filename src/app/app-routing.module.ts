import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottleDetailsComponent } from './components/bottle/bottle-details/bottle-details.component';
import { BottleListComponent } from './components/bottle/bottle-list/bottle-list.component';
import { CellarListComponent } from './components/cellar/cellar-list/cellar-list.component';
import { AboutComponent } from './components/about/about.component';
import { CellarDetailsComponent } from './components/cellar/cellar-details/cellar-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';

const routes: Routes = [
  { path: 'bottle', component: BottleListComponent },
  { path: 'cellar', component: CellarListComponent },
  { path: 'bottle/:WinebottleId', component: BottleDetailsComponent },
  { path: 'cellar/:CellarId', component: CellarDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/edit/:UserId', component: UserEditComponent },
  { path: 'users/:UserId', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

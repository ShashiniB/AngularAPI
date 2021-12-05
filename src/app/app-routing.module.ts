import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UserListComponent } from './users/user-list/user-list.component';


const routes: Routes = [
{path: 'create', component:AddUserComponent},
{path: 'list', component:UserListComponent},
{path: 'delete/:id', component:DeleteUserComponent},
{path: 'update/:id', component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

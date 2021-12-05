import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    UserListComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }

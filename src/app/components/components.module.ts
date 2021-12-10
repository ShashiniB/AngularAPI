import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { RouterModule } from '@angular/router';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    CreateuserComponent,
    UserlistComponent,
    UpdateuserComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
	  RouterModule
  ]
})
export class ComponentsModule { }

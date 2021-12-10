import { AppComponent } from './app.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: CreateuserComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'updateuser/:id', component: UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


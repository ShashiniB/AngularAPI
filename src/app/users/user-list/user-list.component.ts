import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listUsers: any;
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.listUsers = this.UserService.listUsers().subscribe((res:any) => {
      this.listUsers = res.data;
      console.log(res.total_pages);//Meka variable ekakata aragena e count ekata pagination eka ganna. me API eke page dekei aththe. ethkota dekak enne. oya e deka meke ena count eka aran  hadanna. nikn dekak danna epa

    
    });
  }

}

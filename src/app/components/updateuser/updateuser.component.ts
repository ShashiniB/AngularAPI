import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
})
export class UpdateuserComponent implements OnInit {
  userInForm: FormGroup;
  name: string = "";
  job: string = "";
  id: number;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.userInForm = this.formBuilder.group({
      name: "",
      job: "",
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe((res: any) => {
      this.userInForm = this.formBuilder.group({
        name: res.data.first_name,
        // the API does not provide a "job". So I kept it as an empty string
        job: ""
      });
    });
  }

  // Update employee data
  updateUser() {
    this.userService
      .updateUser(this.id, this.name, this.job)
      .subscribe((res:any) => {
        alert(`user updated at ${res.updatedAt}`);
      });
  }
}

import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
})
export class CreateuserComponent implements OnInit {
  userInForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.userInForm = formBuilder.group({
      email: '',
      firstname: '',
      lastname: '',
    });
  }

  ngOnInit(): void {}

  postData() {
    console.log(this.userInForm.value);
    console.log(this.userInForm.value.firstname);

    let email = this.userInForm.value.email;
    let firstname = this.userInForm.value.firstname;
    let secondname = this.userInForm.value.secondname;

    this.userService.addUser(email, firstname, secondname).subscribe(() => {
      console.log('first name is ' + firstname);
      alert('user added successfully');
    });
  }
}


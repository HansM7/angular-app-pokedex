import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin, IUser } from 'src/app/core/models/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: IUser;
  signInGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signInGroup = this.formBuilder.group({
      username: [
        '',
        [
          Validators.minLength(3),
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ],
      ],
      password: ['', [Validators.minLength(3), Validators.required]],
    });
    this.user = this.userService.existUser();
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.signInGroup.valid) {
      const data: ILogin = {
        username: this.signInGroup.value['username'],
        password: this.signInGroup.value['password'],
      };
      this.userService.register(data).subscribe((data) => {
        this.router.navigate(['/auth']);
      });
    }
  }
}

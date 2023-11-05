import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/core/models/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginGroup = this.formBuilder.group({
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
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.loginGroup.valid) {
      const data: ILogin = {
        username: this.loginGroup.value['username'],
        password: this.loginGroup.value['password'],
      };
      this.userService.login(data).subscribe((data) => {
        console.log(data);
        if (data) {
          console.log('here!');
          this.router.navigate(['/pokedex']);
        } else alert('Error');
      });
    }
  }
}

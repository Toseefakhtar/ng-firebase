import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  public successMsj = '';
  public errorMsj = '';

  get f() { return this.loginForm.controls; }

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
    .then(res => {
      this.loading = false;
      this.successMsj = 'LoggedIn';
      console.log(res.user.uid);
      localStorage.setItem('user', JSON.stringify(res.user.uid));
      this.router.navigate(['/home']);
    }, err => {
      this.loading = false;
      console.log(err.message);
      this.errorMsj = err.message;
    });
  }
}

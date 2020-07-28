import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    const value = {
      email: this.f.username.value,
      password: this.f.password.value
    };
    this.authService.register(value)
    .then(res => {
      this.loading = false;
      localStorage.setItem('user', JSON.stringify(res.user.uid));
      this.router.navigate(['/login']);
    }, err => {
      this.loading = false;
      console.log(err.message);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout(): void{
    this.authService.logout()
    .then(res => {
      console.log('res', res);
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }, err => {
      console.log(err.message);
    });
  }

}

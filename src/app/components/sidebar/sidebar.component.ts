import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private authService: AuthService, private router: Router) {}

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

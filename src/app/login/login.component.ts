import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  router:Router;
  constructor(_router: Router){   
       this.router = _router;
   }
  signInUser() {
    this.router.navigateByUrl('user');
  }
}

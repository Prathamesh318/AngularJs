import { Component } from '@angular/core';

import { headerComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users=DUMMY_USERS;
}

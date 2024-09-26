import { Component, input, Input } from '@angular/core';

import { DUMMY_USERS } from '../dummy';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


    @Input({required:true}) avatar!:string;
    @Input({required:true}) name!:string;
    // @Input() avatar!:string;

    // avatar=input<string>();
    // avatar = input.required<string>();
    // name = input.required<string>();

    get imagePath(){

      return 'assets/users/'+this.avatar;
    }
    onSelectUser(){
    }
}

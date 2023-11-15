import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { user } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  public User: Observable<user[]>;

constructor(private userService: UserService) {
   this.User = this.userService.getUsers()
}

ngOnInit() : void{
  this.userService.loadUsers();
    this.userService.getUsers()
    .pipe(take(1))
    .subscribe({
      next: (value) => console.log(value)
    })
}
}

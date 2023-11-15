import { Component, Input } from '@angular/core';
import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  displayedColumns = ['id','name','surname','email'];

 @Input() dataSource: user[] = [];
 
}

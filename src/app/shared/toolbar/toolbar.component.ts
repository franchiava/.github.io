import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input()
   drawer?: MatDrawer ; 
 
}


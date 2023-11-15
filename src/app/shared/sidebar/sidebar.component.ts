import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isExpanded: boolean = false;
  showFiller = false;

  constructor(private sidebarServie: SidebarService, private router: Router) {}
  onNavigate(route: string): void {

    this.router.navigateByUrl(route);
  }

}

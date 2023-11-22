import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
  export class SidebarComponent implements AfterViewInit {
    @ViewChild('drawer') public drawer!: MatSidenav;
  
    constructor(private sidebarService: SidebarService, private router: Router) { }
  
    ngAfterViewInit(): void {
      this.sidebarService.setSidebar(this.drawer);
    }
  
    onNavigate(route: string): void {
      this.router.navigateByUrl(route);
      this.sidebarService.closeSideBar();
    }
  }
  
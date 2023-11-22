import { Injectable } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebar!: MatSidenav;

  public setSidebar(sidebarNav: MatSidenav): void {
    this.sidebar = sidebarNav;
  }

  public closeSideBar(): void {
    if (this.sidebar) {
      this.sidebar.close();
    } else {
      // Manejo de error o aviso de que la barra lateral no está definida
    }
  }

  public toggleSidebar(): void {
    if (this.sidebar) {
      this.sidebar.toggle();
    } else {
      // Manejo de error o aviso de que la barra lateral no está definida
    }
  }
}

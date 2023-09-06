import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private hideSidebar: boolean = true;

  constructor() {}

  toggleSidebar(): void {
    this.hideSidebar = !this.hideSidebar;
  }

  isHideSidebar(): boolean {
    return this.hideSidebar;
  }

  closeSidebar() {
    if (!this.hideSidebar) {
      this.hideSidebar = true;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public sidebarService: SidebarService, private router: Router) {}

  @Input() title: string = '';
  @Input() icon: string = 'fa-bars';
  @Input() openSidebar: boolean = true;
  @Input() link: string = '';

  ngOnInit(): void {}

  onClickButton() {
    if (this.openSidebar) {
      this.sidebarService.toggleSidebar();
    } else {
      this.router.navigate([this.link]);
    }
  }
}

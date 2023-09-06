import { Component, OnInit } from '@angular/core';
import { SidebarService } from './services/sidebar/sidebar.service';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'webcronico';
  constructor(public router: Router, public sidebarService: SidebarService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        (window as any).gtag('config', environment.googleAnalyticsId, {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }

  ngOnInit(): void {
    document.body.addEventListener('click', (e: any) => {
      if (!e.target.classList.contains('toggle')) {
        this.sidebarService.closeSidebar();
      }
    });
  }
}

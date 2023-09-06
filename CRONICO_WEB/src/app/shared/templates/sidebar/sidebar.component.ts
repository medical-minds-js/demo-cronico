import { Component, OnInit } from '@angular/core';
import { SessionService } from '@services/session/session.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    public sidebarService: SidebarService,
    public session: SessionService
  ) {}

  ngOnInit(): void {}
}

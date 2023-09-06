import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './templates/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { HeaderComponent } from './templates/header/header.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './templates/pagination/pagination.component';

@NgModule({
  declarations: [
    ModalComponent,
    SidebarComponent,
    HeaderComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    ModalComponent,
    ReactiveFormsModule,
    SidebarComponent,
    HeaderComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}

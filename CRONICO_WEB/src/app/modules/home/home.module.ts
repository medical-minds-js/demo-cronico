import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClient } from '@angular/common/http';
import { QaPageComponent } from './qa-page/qa-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';
import { RequestFormComponent } from './components/request-form/request-form.component';

@NgModule({
  declarations: [HomePageComponent, QaPageComponent, RequestFormComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [HttpClient],
})
export class HomeModule {}

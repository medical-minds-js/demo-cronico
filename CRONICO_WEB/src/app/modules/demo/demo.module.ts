import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [DemoPageComponent],
  imports: [CommonModule, DemoRoutingModule],
})
export class DemoModule {}

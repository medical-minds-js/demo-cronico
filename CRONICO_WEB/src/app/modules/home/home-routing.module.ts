import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QaPageComponent } from './qa-page/qa-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'qa', component: QaPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

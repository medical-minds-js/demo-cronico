import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchDetailsDiseaseComponent } from './search-details-disease/search-details-disease.component';
import { SearchDetailsSupplyComponent } from './search-details-supply/search-details-supply.component';
import { SearchDetailsAilmentComponent } from './search-details-ailment/search-details-ailment.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  {
    path: 'disease',
    component: SearchDetailsDiseaseComponent,
  },
  {
    path: 'supply',
    component: SearchDetailsSupplyComponent,
  },
  {
    path: 'ailment',
    component: SearchDetailsAilmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchDetailsDiseaseComponent } from './search-details-disease/search-details-disease.component';
import { SearchDetailsSupplyComponent } from './search-details-supply/search-details-supply.component';
import { BuySupplyModalComponent } from './modals/buy-supply-modal/buy-supply-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchDetailsAilmentComponent } from './search-details-ailment/search-details-ailment.component';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchDetailsDiseaseComponent,
    SearchDetailsSupplyComponent,
    BuySupplyModalComponent,
    SearchDetailsAilmentComponent,
  ],
  imports: [CommonModule, SearchRoutingModule, SharedModule],
})
export class SearchModule {}

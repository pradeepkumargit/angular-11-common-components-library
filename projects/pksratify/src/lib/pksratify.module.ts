import { NgModule } from '@angular/core';
import { PksratifyComponent } from './pksratify.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';



@NgModule({
  declarations: [
    PksratifyComponent, 
    ShowProductDetailsComponent
  ],
  imports: [
  ],
  exports: [
    PksratifyComponent,
    ShowProductDetailsComponent
  ]
})
export class PksratifyModule { }

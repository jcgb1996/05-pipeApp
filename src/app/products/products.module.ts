import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipe/toggle-case.pipe';
import { CanFly } from './pipe/can-Fly.pipe';
import { SortByPipe } from './pipe/sortBy.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //pipe
    ToggleCasePipe,
    CanFly,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }

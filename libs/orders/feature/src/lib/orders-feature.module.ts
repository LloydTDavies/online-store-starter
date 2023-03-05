import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: OrdersComponent}
    ]),
  ],
  declarations: [OrdersComponent],
})
export class OrdersFeatureModule {}

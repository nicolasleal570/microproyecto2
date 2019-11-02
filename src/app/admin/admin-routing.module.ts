import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';


const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children: [
    { path: '', component: AllOrdersComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {SearchCarsComponent} from './search-cars/search-cars.component';
import {InventoryComponent} from './search-cars/inventory/inventory.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'search',
    component: SearchCarsComponent
  },
  {
    path: 'inventory/:id',
    component: InventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

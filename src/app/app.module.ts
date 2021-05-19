import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { InventoryComponent } from './search-cars/inventory/inventory.component';
import { NewUsedPipe } from './search-cars/inventory/new-used.pipe';
import {IndividualCarComponent} from './search-cars/inventory/individual-car/individual-car.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    SearchCarsComponent,
    InventoryComponent,
    NewUsedPipe,
    IndividualCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

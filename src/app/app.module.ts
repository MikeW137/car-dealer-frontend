import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewInventoryComponent } from './new-inventory/new-inventory.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
=======
import { HttpClientModule} from '@angular/common/http';
>>>>>>> e03c65304356813e68fe8e9cda84bfa3035daf5f

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    NewInventoryComponent
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

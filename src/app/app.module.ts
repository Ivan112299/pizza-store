import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { DrinksComponent } from './drinks/components/drinks/drinks.component';
import { DeliveryComponent } from './delivery/components/delivery/delivery.component';
import { ContactsComponent } from './contacts/components/contacts/contacts.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DrinksComponent,
    DeliveryComponent,
    ContactsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

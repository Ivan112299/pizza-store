import { PizzaCardComponent } from './../shared/components/pizza-card/pizza-card.component';
import { NgModule } from "@angular/core";
import { PizzaService } from "../shared/services/pizza-data.service";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { CallToActionComponent } from "./components/call-to-action/call-to-action.component";
import { PizzaItemsComponent } from "./components/pizza-items/pizza-items.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PizzaItemsComponent,
    CallToActionComponent,
    PizzaCardComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [

  ],
  providers: [
    PizzaService,
  ]

})

export class HomeModule {

}
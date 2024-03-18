import { Component, OnInit } from '@angular/core';
import { PizzaItem } from 'src/app/shared/models/pizza-item';
import { PizzaService } from 'src/app/shared/services/pizza-data.service';

@Component({
  selector: 'app-pizza-items',
  templateUrl: './pizza-items.component.html',
  styleUrls: ['./pizza-items.component.less']
})
export class PizzaItemsComponent implements OnInit {

  pizzaItems: PizzaItem[] = []

  constructor(private pizzaService: PizzaService) {

  }
  ngOnInit(): void {
    this.pizzaItems = this.pizzaService.pizzaItems
  }


}

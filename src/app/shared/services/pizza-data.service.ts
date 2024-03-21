import { Injectable } from '@angular/core';
import { OrderInfo, PizzaItem } from '../models/pizza-item';
import { Observable, from } from 'rxjs';

@Injectable()
export class PizzaService {
  public pizzaItems: PizzaItem[] = [
    {
      name: 'Мясная де люкс',
      content: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы,',
      img: 'assets/mock-pizza/pizza_1.png',
    },
    {
      name: 'Морская Премиум',
      content: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      img: 'assets/mock-pizza/pizza_2.png',
    },
    {
      name: 'Бекон и Сосиски',
      content: 'Бекон, сыр, сосиски, ананас, томатная паста',
      img: 'assets/mock-pizza/pizza_3.png',
    },
    {
      name: 'Куриная Делюкс',
      content: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      img: 'assets/mock-pizza/pizza_4.png',
    },
    {
      name: 'Барбекю Премиум',
      content:
        'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чи',
      img: 'assets/mock-pizza/pizza_4.png',
    },
    {
      name: 'Пепперони Дабл',
      content: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      img: 'assets/mock-pizza/pizza_3.png',
    },
    {
      name: 'Куриное трио',
      content:
        'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, г',
      img: 'assets/mock-pizza/pizza_2.png',
    },
    {
      name: 'Сырная',
      content: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      img: 'assets/mock-pizza/pizza_1.png',
    },
  ];

  constructor() {}

  getPizzaItems(): PizzaItem[] {
    return this.pizzaItems;
  }

  sendOrder(orderInfo: OrderInfo): Observable<Response> {
    return from(fetch('https://jsonplaceholder.typicode.com/todos/1'))
  }
}

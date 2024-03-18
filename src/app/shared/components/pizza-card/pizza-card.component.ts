import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.less'],

})
export class PizzaCardComponent {
  @Input() name: string = '';
  @Input() content: string = '';

}

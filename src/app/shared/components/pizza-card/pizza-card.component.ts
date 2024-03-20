import { Component, Input, OnInit } from '@angular/core';
const VenoBox = require('venobox')

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.less'],

})
export class PizzaCardComponent implements OnInit{
  @Input() name: string = '';
  @Input() content: string = '';
  @Input() imgSrc: string =''

  ngOnInit(): void {
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
    });
  }
}

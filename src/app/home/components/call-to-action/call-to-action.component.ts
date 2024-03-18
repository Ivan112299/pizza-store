import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.less'],
})
export class CallToActionComponent {

  deliveryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    adress: ['', Validators.required],
    tel: ['', Validators.pattern('[0-9]')]
  })
  constructor(private fb: FormBuilder) {

  }

  onSetOrder() {
    console.log('Заказ оформлен, запрос в апи', this.deliveryForm.status)
    this.deliveryForm.reset()
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.less'],
})
export class CallToActionComponent {

  formHasError = false
  textAlert = 'Форма заполнена не корректно'

  deliveryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    adress: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('[0-9]')]]
  })
  constructor(private fb: FormBuilder) {

  }

  onSetOrder() {
    console.log('FormData', this.deliveryForm)
    if (this.deliveryForm.status === 'INVALID') {
      this.formHasError = true;
      return
    };
    console.log('Запос в апи', this.deliveryForm)
    this.deliveryForm.reset()
  }
}

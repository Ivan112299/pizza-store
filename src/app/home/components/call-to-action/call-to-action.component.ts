import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, take } from 'rxjs';
import { OrderInfo } from 'src/app/shared/models/pizza-item';
import { PizzaService } from 'src/app/shared/services/pizza-data.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.less'],
})
export class CallToActionComponent implements OnInit {

  textAlertError = 'Ошибка отправки заказа';
  textAlertSuccess = 'Заказ отправлен';

  deliveryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    adress: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)]]
  })

  get _name() {
    return this.deliveryForm.get('name');
  }

  get _adress() {
    return this.deliveryForm.get('adress');
  }

  get _tel() {
    return this.deliveryForm.get('tel');
  }

  @ViewChild('name') name: HTMLInputElement | null = null;

  submitted = false;
  viewAlertSuccess = false;
  viewAlertErr = false;

  constructor(private fb: FormBuilder, private pizzaService: PizzaService) {}

  onInputName(event: any) {
    if (event.data == '.') {
      let currentNameValue = this.deliveryForm.value.name
      this.deliveryForm.patchValue({ name: currentNameValue.replace(/[.]/g, '') })
    }
  }

  ngOnInit(): void {
    this.deliveryForm.valueChanges
      .pipe()
      .subscribe((data) => {
        if (data.tel?.length == 1 && data.tel !== '+') {
          this.deliveryForm.patchValue({ tel: `+${data.tel}` })
        }
      })
  }


  onSubmit() {
    if (this.deliveryForm.status === 'INVALID') return;

    this.submitted = true;
    this.pizzaService.sendOrder(this.deliveryForm.value as OrderInfo).subscribe({
      next: () => {
        this.submitted = false
        this.deliveryForm.reset()
        this.viewAlertSuccess = true
      },
      error: () => {
        this.submitted = false
        this.viewAlertErr = true
      },
    })
  }
}

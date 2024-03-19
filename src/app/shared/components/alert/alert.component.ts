import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export const FormType = {
  success: 'success',
  error: 'error',
};

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less'],
})
export class AlertComponent implements OnInit {
  @Input() delay = 1000;
  @Input() text = '';
  @Input() type = '';
  @Output() close = new EventEmitter();
  success = false;
  error = false;

  constructor() {}
  ngOnInit(): void {
    switch (this.type) {
      case FormType.success:
        this.success = true;
        this.error = false;
        break;
      case FormType.error:
        this.error = true;
        this.success = false;
        break;
      default:
        this.success = true;
    }
    setTimeout(() => {
      this.close.emit();
    }, this.delay);
  }
}

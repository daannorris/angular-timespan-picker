import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';
  form = this._fb.group({
    minutes: this._fb.control(12, [Validators.required, Validators.max(24*60)]),
  });

  constructor(
    private _fb: FormBuilder) {
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimespanPickerComponent } from './timespan-picker.component';
import { TimespanPickerDirective } from './timespan-picker.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimespanPickerComponent, TimespanPickerDirective],
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  exports: [TimespanPickerComponent, TimespanPickerDirective]
})
export class TimespanPickerModule { }

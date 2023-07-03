import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-timespan-picker',
  templateUrl: './timespan-picker.component.html',
  styleUrls: ['./timespan-picker.component.scss']
})
export class TimespanPickerComponent implements OnInit {

  private _max: number = 0;
  private _min: number = 0;
  private _model = {
    hours: 0,
    minutes: 0,
    value: 0
  };

  @Output() selected = new EventEmitter<number>();

  @Input()
  set max(value: number) {
    this._max = value;
  }

  @Input()
  set min(value: number) {
    this._min = value;
  }

  hoursControl = new FormControl<number>(0);
  minutesControl = new FormControl(0);
  id = Math.random().toString(36).substring(2);

  constructor() { }

  ngOnInit(): void {
    this.hoursControl.valueChanges.pipe(distinctUntilChanged(), filter(c => this._model.hours !== c)).subscribe(c => { this.updateHours(c ?? 0) })
    this.minutesControl.valueChanges.pipe(distinctUntilChanged(), filter(c => this._model.minutes !== c)).subscribe(c => { this.updateMinutes(c ?? 0) })
  }

  updateHours(value: number) {
    this.updateValue(value, this._model.minutes);
  }

  updateMinutes(value: number) {
    this.updateValue(this._model.hours, value);
  }

  updateValue(hours: number, minutes: number) {
    let value = (hours * 60) + minutes;

    if (this._max !== this._min && value > this._max) {
      value = this._max;
    }

    if (value < this._min) {
      value = this._min;
    }

    console.log(value);
    this.writeValue(value);
  }

  writeValue(value: number) {
    this._model = {
      ...this._model,
      hours: Math.floor(value / 60),
      minutes: value % 60,
      value: value
    };
    this.hoursControl.setValue(this._model.hours);
    this.minutesControl.setValue(this._model.minutes);
    this.selected.emit(value);
  }
}

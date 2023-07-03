import { AfterContentInit, Directive, Input } from "@angular/core";
import { TimespanPickerComponent } from "./timespan-picker.component";

@Directive({
  selector: 'app-timespan-picker',
})
export class TimespanPickerDirective implements AfterContentInit {

  private _currentValue: string;
  @Input() host: HTMLInputElement;

  constructor(private timespanPicker: TimespanPickerComponent) { }

  ngAfterContentInit() {
    if (this.host && this.timespanPicker) {
      this.host.style.display = 'none';
      this.host.addEventListener('change', () => {
        if(this._currentValue !== this.host.value) {
          this.timespanPicker.writeValue(parseInt(this.host.value || '0'));
        }
      })
      this.timespanPicker.writeValue(parseInt(this.host.value || '0'));
      this.timespanPicker.selected.subscribe(c => {
        this._currentValue = `${c}`;
        this.host.value = this._currentValue;
        this.host.dispatchEvent(new Event("input"))
      });
    }
  }
}

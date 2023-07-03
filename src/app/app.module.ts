import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimespanPickerModule } from './components/timespan-picker/timespan-picker.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, TimespanPickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

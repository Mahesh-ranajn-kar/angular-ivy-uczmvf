import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyUpperPipe } from './my-upper.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyUpperPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

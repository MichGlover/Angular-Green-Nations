import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FwModule } from 'src/fw/fw.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, FwModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

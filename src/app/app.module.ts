import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DomChangedDirective } from './dom-changed.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DomChangedDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

 import { AppComponent } from './app.component';
 import { CarListComponent } from './products/car-list.component';
 import { StarComponent } from './shared/star.component';
 import {uselessPipe} from "./services/uselessPipe";

import { UnderlineDirective } from './shared/underline.directive';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    StarComponent,
    uselessPipe,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
  ,
  exports: [UnderlineDirective, AppComponent]
})
export class AppModule { }

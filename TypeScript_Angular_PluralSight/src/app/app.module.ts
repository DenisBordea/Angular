import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

 import { AppComponent } from './app.component';
 import { CarListComponent } from './products/car-list.component';
 import { StarComponent } from './shared/star.component';
 import {uselessPipe} from "./services/uselessPipe";
 
import { UnderlineDirective } from './shared/underline.directive';

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
  providers: [],
  bootstrap: [AppComponent]
  ,
  exports: [UnderlineDirective]
})
export class AppModule { }

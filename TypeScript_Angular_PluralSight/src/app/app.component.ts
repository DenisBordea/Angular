import {Component} from '@angular/core';
import { ProductService } from './services/product.service';
import { LogService } from './services/log.service';

@Component({
  selector: 'g-root',
  templateUrl: './app.component.html',
  providers: [ProductService, LogService]
})

export class AppComponent {
  noToCallUs: string = '1234567890';
}

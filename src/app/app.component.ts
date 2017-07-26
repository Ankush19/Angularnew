import { Component } from '@angular/core';
import { ProductService } from './Services/ProductService';


@Component({
  selector: 'my-app',
  
  template:`<my-navbar></my-navbar>
  <router-outlet></router-outlet>`,
  // styleUrls:['./navbar.css','./login.css']
   providers: [ProductService]

})
export class AppComponent  { name = 'Angular'; }

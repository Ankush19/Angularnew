import { Component } from '@angular/core';
import {Router}  from '@angular/router'

@Component({
  selector: 'my-navbar',
  templateUrl: `./navbar.html`,
  styleUrls:['./login.css']

})
export class NavbarComponent  { 

    constructor(private router:Router)
    {

    }
    Postad(){
        this.router.navigate(["post"]);
    }
 }

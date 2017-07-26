import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { FormsModule }  from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/Home/Home.component';
import { NavbarComponent }  from './components/Navbar/Navbar.Component';
import { PostComponent }  from './components/PostAd/Post.component';
import { AllAdsComponent }  from './components/GetAllAds/AllAds.component';
import { EditComponent }  from './components/EditAd/EditAd.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([{path:'',component:HomeComponent},{path:'post',component:PostComponent},{path:'ads',component:AllAdsComponent},{path:'edit/:id',component:EditComponent}])],
  declarations: [ AppComponent,HomeComponent,NavbarComponent,PostComponent,AllAdsComponent,EditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

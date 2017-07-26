import { Component } from '@angular/core';
import { ProductService } from '../../Services/ProductService';
import { Http } from '@angular/http';
import { Router } from "@angular/router";

@Component({
    selector: 'my-ads',
    templateUrl: `./AllAds.html`,

})
export class AllAdsComponent {
    advertises: any = [];
    deladvertises: any = [];

    constructor(private productService: ProductService,private router:Router) {
        this.displayAllAds();
    }

    displayAllAds() {

        this.productService.getAllAds().subscribe((data) => {
            this.advertises = data.data.mypostList;
            console.log('Received products:', this.advertises)
        });
    }

    DeleteAd(obj: any) {
        this.productService.DeleteAdvert(obj.id).subscribe((data)=>{
            console.log("delete",data);
            this.displayAllAds();
        });
        
  
    }
    
    editobject(obj:any){
        this.router.navigate(['/edit',obj.id]);
        }


    // onSubmit(data: any) {
    //     this.productService.postAd(data);
    //     // this.productService.addAdvertise(data);
    // }

}

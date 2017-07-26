import { Component } from '@angular/core';
import { ProductService } from '../../Services/ProductService';
import { Http } from '@angular/http';

@Component({
    selector: 'my-post',
    templateUrl: `./post.html`,

})
export class PostComponent {
    categories: any=[];
    title = "Add Advertisement";
    options = [{ name: 'Furniture', value: 'Furniture' }, { name: 'Cloths', value: 'Cloths' }, { name: 'Mobile', value: 'Mobile' }];
   
    constructor(private productService: ProductService) {
        productService.getCategories().subscribe((data) => {
        this.categories = data.data.itemList;
        console.log('Received products:', this.categories)
});
    }

    
onSubmit(data: any) {
    this.productService.postAd(data);
    // this.productService.addAdvertise(data);
}

}

import { Component } from '@angular/core';
import { ProductService } from '../../Services/ProductService';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
    selector: 'my-edit',
    templateUrl: `./editad.html`,

})
export class EditComponent {
    hardvalue: any;
    id: any;
    categoryOptions: any = [];
    dispAllAdver: any;
    edescription: any; ename: any; ecategory: any; etitle: any;

    // ngOnInit(): void {
    // }

    constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.id = this.activatedRoute.snapshot.params['id'];
        console.log("Id after ", this.id);

        this.productService.getCategories().subscribe((data) => {
            console.log("Data", data);
            this.categoryOptions = data.data.itemList;
            console.log("Category ", this.categoryOptions);

        });

        this.dispAll();
    }

    title = "Edit Advertisement";
    //categoryOptions = [{ name: 'Furniture', value: 'Furniture' }, { name: 'Hardware', value: 'Cloths' }, { name: 'Mobile', value: 'Mobile' }, { name: 'Real Estate', value: 'Real Estate' }];
    fname: any;

    onSubmit(data: any) {
        this.productService.EditAdv(data, this.id).subscribe((data) => {
            console.log('Response edited data: ', data)
        });

        this.dispAll();

        this.onClick("adTable");
    }

    //getCategories to print all categories, use getCategories.html
    onClicked() {
        this.productService.getCategories().subscribe((data) => {
            console.log(data)
        });
    }

    dispAll() {
        this.productService.getAllAds().subscribe((data) => {
            //console.log('Response!: ', data);
            this.dispAllAdver = data.data.mypostList;
            //console.log('Response!: ', this.dispAllAdver);
            this.findTheId();
        });
    }

    findTheId() {
        this.hardvalue = this.dispAllAdver.find(x => x.id === this.id);
        this.edescription = this.hardvalue.description;
        this.ename = this.hardvalue.name;
        this.ecategory = this.hardvalue.category;
        this.etitle = this.hardvalue.title;
        //console.log("hard code after", this.hardvalue);
    }
    onClick(goTo: any) {
        this.router.navigate([goTo]);
    }

}

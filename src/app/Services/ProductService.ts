import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class ProductService {
    products: Array<any> = [];
    urlcat = 'http://192.168.3.144:9000/categories';
    urlads = 'http://192.168.3.144:9000/posts';
    
    constructor(private _http: Http) {
    }
    getCategories() {
        return this._http.get(this.urlcat).
            map((response: Response) => response.json());
    }
    
    getAllAds() {
      let url = "http://192.168.3.144:9000/posts"; //Akshay machine
        let headers = new Headers();
        headers.append('auth-token', '5976ebc81c0edf75e32798eb');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options).
            map((response: Response) => response.json());
      
    }

    DeleteAdvert(id:any){
        let urldel="http://192.168.3.144:9000/post?postId=";
        return  this._http.delete(urldel+id).map((response:Response)=>response.json());

    }

    EditAdv(item:any,id:any){
          let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        let headers = new Headers();
        headers.append('auth-token', '5976ebc81c0edf75e32798eb');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        let jsonReq = { "postId": id, "status": "Open","title": item.price, "name": item.name, "category": item.category, "description": item.description };
        console.log("id after",id,"Json: ",jsonReq);
        return this._http.put(url, jsonReq, options)
            .map((response: Response) => response.json());
    

    }
    
    // getAllAdvertises() {
    //     return this.products;
    // }
    //  addAdvertise(item: Object) {
    //  this.products.push(item);
    //      console.log(this.products);
    //  }
    // // deleteAdvertise(index: any) {
    //     if (index !== -1) {
    //         this.products.splice(index, 1);
    //     }
    // }
    // editAdvertise(index: any, value:Object){
    //     this.products.splice(index, 1, value)
    // }
    // demo() {
    //     return this._http.get(this.url).
    //         map((response: Response) => response.json());
            
    // }
     postAd(item:any) {
        let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        let headers = new Headers();
        headers.append('auth-token', '5976ebc81c0edf75e32798eb');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = { title:item.title,name: item.name, category: item.category, description: item.description};
        console.log(jsonReq);
       let obj=this._http.post(url, jsonReq, options)
			.map((response: Response)=>response.json());
            obj.subscribe((data)=>{console.log(data)});


    }
}
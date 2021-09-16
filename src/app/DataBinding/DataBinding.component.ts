import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-databinding',
    template: `
        <div class="container" style="margin-bottom:500px;">
            Databinding
            <h1>Oneway binding</h1>
            <hr />
            <h3>1- Interpolation </h3>
            <p>Title : Hello ! {{title}}</p>
            <input class="form-control w-25" value="{{title}}" />
            <hr />
            <h3>2- Properties binding</h3>
            <p [innerHTML]="'Hello ' + title"></p>
            <input class="form-control w-25" [value]="title" />
            <hr />
            <h3>3- Event binding</h3>
            <input class="form-control w-25" #inputTitle />
            <br />
            <button class="btn btn-outline-success" (click)="changeTitle(inputTitle.value)" >Change title</button>
            <h1>Twoway binding</h1>
            <input class="form-control w-25" [(ngModel)]="title" />
            <br />
            <input class="form-control w-25" (keyup)="changeTitle(text.value)" #text />
            <br />
            <h3>Product</h3>
            <div class="card w-25">
                <img src="https://picsum.photos/200/200" />
                <div class="card-body">
                    <p>{{product.name}}</p>
                    <p>{{product.price}}</p>
                </div>
            </div>
            <h3>Edit product</h3>
            <div class="form-group">
                <p>Id</p>
                <input class="form-control" [(ngModel)]="product.id" />
            </div>
            <div class="form-group">
                <p>Name</p>
                <input class="form-control" [(ngModel)]="product.name"  />
            </div>
            <div class="form-group">
                <p>Price</p>
                <input class="form-control" [(ngModel)]="product.price" />
            </div>
            <div class="form-group">
                <button class="btn btn-outline-danger">Update product</button>
            </div>
            <hr />
            <h3>Bài tập</h3>
            <app-bt-databinding></app-bt-databinding>

        </div>
    `
})
export class DataBindingComponent implements OnInit { // MVVM: Mô hình hoạt động angular (Model view view model)
    title:string = 'Cybersoft';
    product:Product = {
        id:'1',
        name:'Iphone',
        price:1000
    }
    constructor() { }
    ngOnInit() { 
        // let abc = 'cybersoft'
        // this.title = abc;

    }

    changeTitle (newTitle:string) {
        this.title = newTitle;
    }
}
interface Product {
    id:string,
    name:string,
    price:number
}
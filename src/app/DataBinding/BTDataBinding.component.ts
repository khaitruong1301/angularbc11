import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-databinding',
    template: `<div>
        <h3>Register</h3>
        <div class="form-group">
            <p>Email</p>
            <input class="form-control" [(ngModel)]="email"/>
        </div>
        <div class="form-group">
            <p>Fullname</p>
            <input class="form-control" #fName />
        </div>
        <div class="form-group">
           <button class="btn btn-success" (click)="changeName(fName.value)">Submit</button>
        </div>
        <b>Email:</b> {{email}}
        <br />
        <b>Fullname: </b> {{fullName}}

      
    </div>
    `
})

export class BTDatabindingComponent implements OnInit {
    email:string = 'Dùng [(ngModel)]';
    fullName:string = 'Dùng event binding';
    constructor() { }

    ngOnInit() { }
    changeName(name:string) {
        this.fullName = name
    }
}
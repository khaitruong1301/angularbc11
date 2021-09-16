import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive-demo',
    template: `
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Action 1</a>
                                <a class="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <a class="nav-link" *ngIf="isLogin" href="#">Hello {{userName}}</a>
                        <a class="nav-link" *ngIf="!isLogin" href="#">Login</a>
                    </form>
                </div>
            </nav>
            <div class="container">
                <h3>*ngIf</h3>
                <br />
                <h3>Xuất số chẵn lẻ</h3>
                <input class="w-25 form-control" [(ngModel)]="number" />
                <div class="alert alert-success mt-2">
                    <p *ngIf="number%2===0; else tempSoLe">Số chẵn</p>
                    <!-- <p *ngIf="number%2!==0">Số lẻ</p> -->
                </div>
                <hr />
                <h3>*ngSwitch</h3>
                <div [ngSwitch]="color">
                    <div *ngSwitchCase="'red'" style="color:red">Red</div>
                    <div *ngSwitchCase="'green'" style="color:green">green</div>
                    <div *ngSwitchCase="'yellow'" style="color:yellow">yellow</div>
                    <div *ngSwitchCase="'orange'" style="color:orange">orange</div>
                    <div *ngSwitchDefault style="color:blue">blue</div>
                </div>
                <select class="w-25 form-control" [(ngModel)]="color">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                </select>
                <hr />
                <h3>*ngFor</h3>
                <div class="row">
                    <div class="col-4" *ngFor="let user of arrUser">
                        <div class="card">
                            <img [src]="user.avatar" alt="..." />
                            <div class="card-body">
                                <p>Name: {{user.name}}</p>
                                <p>Email: {{user.email}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <h3>Danh sách người dùng </h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ng-container *ngIf="arrUser.length > 0" >
                            <tr *ngFor="let user of arrUser;let idx = index">
                                <td>{{idx + 1}}</td>
                                <td>{{user.id}}</td>
                                <td><img [src]="user.avatar" width="50" height="50" alt="..." /></td>
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                            </tr>
                        </ng-container>
                        <ng-container *ngIf="arrUser.length == 0">
                                Không tìm thấy sản phẩm !
                        </ng-container>
                    </tbody>
                </table>
            </div>
            <ng-template #tempSoLe>
                <p>Số lẻ</p>
            </ng-template>
        </div>
    `
})

export class DirectiveDemoComponent implements OnInit {
    arrUser:User[] = [
        {id:'1',name:'Phú',email:'phu@gmail.com',avatar:'https://i.pravatar.cc/150?u=phu'},
        {id:'2',name:'Tuân',email:'tuan@gmail.com',avatar:'https://i.pravatar.cc/150?u=tuan'},
        {id:'3',name:'Sĩ',email:'si@gmail.com',avatar:'https://i.pravatar.cc/150?u=si'},
    ]
    //framework != lib
    color:string = 'red';
    number:number = 0;
    userName:string = 'Luân Cybersoft';
    isLogin: boolean = true;
    constructor() { }

    ngOnInit() { }
}

interface User {
    id:string,
    name:string,
    email:string,
    avatar:string
}
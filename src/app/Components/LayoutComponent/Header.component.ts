import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div class="header">
            Header work !
        </div>
    `,
    styles:[
        `
            .header{
                background:red;
                text-align:center;
                height:20vh;
            }
        `
    ]
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
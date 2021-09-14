import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            footer
        </div>
    
    `,
    styles:[`
        .footer{
            background:yellow;
            text-align:center;
            height:20vh;
        }
    `]
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
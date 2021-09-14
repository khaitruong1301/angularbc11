import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `
        <div class="content">
                content
        </div>
    
    `,
    styles:[`
       .content{
                background:green;
                text-align:center;
                height:60vh;
        }
    `]
})

export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
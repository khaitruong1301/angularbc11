import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    template: `
        <div class="sidebar">
            sidebar
        </div>
    
    `,
    styles:[
        `
             .sidebar{
                background:blue;
                text-align:center;
                height:60vh;
        }
        `
    ]
})

export class SidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
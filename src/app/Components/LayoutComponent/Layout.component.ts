import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
        <div>
            <div> 
                <app-header></app-header>
            </div>
            <div class="d-flex">
                <div class="w-75">
                    <app-content></app-content>
                </div>
                <div class="w-25">
                    <app-sidebar></app-sidebar>
                </div>
            </div>
            <div>
                <app-footer></app-footer>
            </div>
        </div>
    
    `
})

export class LayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
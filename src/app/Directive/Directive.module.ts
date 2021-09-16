import { NgModule } from '@angular/core';
import { DirectiveDemoComponent } from './DirectiveDemo.component';
//Import module sử dụng directive
import { CommonModule } from '@angular/common';
//Import module sử dụng 2waybinding
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [DirectiveDemoComponent],
    imports: [CommonModule,FormsModule],
    exports: [DirectiveDemoComponent],
})
export class DirectiveModule { }

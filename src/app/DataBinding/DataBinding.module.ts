import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';
//Module cung cấp tính năng 2waybinding
import { FormsModule } from '@angular/forms';
import { BTDatabindingComponent } from './BTDataBinding.component';


@NgModule({
    declarations: [DataBindingComponent,BTDatabindingComponent],
    imports: [FormsModule],
    exports: [DataBindingComponent],
})
export class DataBindingModule { }

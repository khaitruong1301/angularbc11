import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './Components/Layout.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';

import { DemoComponent } from './demo/demo.component';
import { DirectiveModule } from './Directive/Directive.module';


/*Module dùng để đóng gói 1 tính năng của ứng dụng */
/*
  Mối quan hệ giữa module và component : Module đóng vai trò quản lý component 
*/
@NgModule({
  declarations: [ //Nơi khai báo các component trong module này 
    AppComponent, DemoComponent
  ],
  imports: [
    BrowserModule,LayoutModule,DataBindingModule,DirectiveModule //Module con (import các module con vào module này để sử dụng các tính năng từ module đó)
  ],
  providers: [], // Khai báo các service cho ứng dụng
  bootstrap: [AppComponent] // Các component sử dụng trong trang index.html
})
export class AppModule { } //App module là module gốc của ứng dụng

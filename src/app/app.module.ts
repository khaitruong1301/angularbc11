import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './Components/LayoutComponent/Content.component';
import { FooterComponent } from './Components/LayoutComponent/Footer.component';
import { HeaderComponent } from './Components/LayoutComponent/Header.component';
import { LayoutComponent } from './Components/LayoutComponent/Layout.component';
import { SidebarComponent } from './Components/LayoutComponent/SideBar.component';
import { DemoComponent } from './demo/demo.component';


/*Module dùng để đóng gói 1 tính năng của ứng dụng */
/*
  Mối quan hệ giữa module và component : Module đóng vai trò quản lý component 
*/
@NgModule({
  declarations: [ //Nơi khai báo các component trong module này 
    AppComponent, DemoComponent,HeaderComponent,LayoutComponent,SidebarComponent,FooterComponent,ContentComponent
  ],
  imports: [
    BrowserModule //Module con (import các module con vào module này để sử dụng các tính năng từ module đó)
  ],
  providers: [], // Khai báo các service cho ứng dụng
  bootstrap: [AppComponent] // Các component sử dụng trong trang index.html
})
export class AppModule { } //App module là module gốc của ứng dụng

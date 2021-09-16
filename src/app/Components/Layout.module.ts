import { NgModule } from '@angular/core';
import { ContentComponent } from './LayoutComponent/Content.component';
import { FooterComponent } from './LayoutComponent/Footer.component';
import { HeaderComponent } from './LayoutComponent/Header.component';
import { LayoutComponent } from './LayoutComponent/Layout.component';
import { SidebarComponent } from './LayoutComponent/SideBar.component';


@NgModule({
    declarations: [HeaderComponent,LayoutComponent,SidebarComponent,FooterComponent,ContentComponent],//Nơi khai báo component của module này
    imports: [], //Gắn các module khác vào module này
    exports: [LayoutComponent], //Những gì mà module này xuất ra cho module khác khi module khác import module này vào
})
export class LayoutModule { }

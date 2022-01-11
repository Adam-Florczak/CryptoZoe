import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { HeaderTabMenuComponent } from './view/header-tab-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [HeaderTabMenuComponent],
  exports: [HeaderTabMenuComponent],
  imports: [
    CommonModule,
    TabMenuModule,
    TabViewModule,
    BrowserModule,
    MessageModule,
    BrowserAnimationsModule
  ]
})
export class HeaderTabMenuModule { }

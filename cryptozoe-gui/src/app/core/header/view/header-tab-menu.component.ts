import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-tab-menu',
  templateUrl: './header-tab-menu.component.html',
  styleUrls: ['./header-tab-menu.component.scss']
})
export class HeaderTabMenuComponent implements OnInit{

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {label: 'CryptoZoe', icon: 'pi pi-fw pi-chart-bar'},
      {label: 'Crypto', icon: 'pi pi-fw pi-chart-line'},
      {label: 'Markets', icon: 'pi pi-fw pi-chart-bar'},
      {label: 'NFT', icon: 'pi pi-fw pi-palette'},
      {label: 'Log In', icon: 'pi pi-fw pi-users', style: {'margin-left' : 'auto'}},
      {label: 'Register', icon: 'pi pi-fw pi-user-plus'},
      {label: 'Language', icon: 'pi pi-fw pi-globe'},
      {label: 'Currency', icon: 'pi pi-fw pi-money-bill'},
      { icon: 'far fa-sun'}
    ];
  }
}

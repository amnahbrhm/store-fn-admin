import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/home',
        // routerLinkActiveOptions: { excat: true },
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Products',
        routerLink: '/items',
        // routerLinkActiveOptions: { excat: true },
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Card',
        // routerLink: '/items',
        // routerLinkActiveOptions: { excat: true },
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Wish list',
        // routerLink: '/items',
        // routerLinkActiveOptions: { excat: true },
        icon: 'pi pi-fw pi-home'
      },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: any) {
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = this.items[this.items.length - 1];
  }
}

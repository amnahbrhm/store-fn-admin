import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    constructor() { }
    routes = [
        {
          path: 'items',
          name: 'Products',
          icon: 'assets/images/icons/project.svg',
        },
        {
          path: 'users',
          name: 'Users',
          icon: 'assets/images/icons/dashboard.svg',
        }
      ];
    ngOnInit() { }
}
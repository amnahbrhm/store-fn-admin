import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem!: MenuItem;
  options: { label: string; icon: string; command: () => void; }[] = [];
  constructor(private router: Router, private auth: AuthService){}
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
    this.options = [
      {
        label: 'Logout',
        icon: 'pi pi-refresh',
        command: () => {
          // this.confirm('role-change')
          this.logout()
        }
      
      }
    ];

    this.activeItem = this.items[0];
  }
  logout() {
    localStorage.removeItem('token')
    this.auth.isLoggedIn = false
    this.router.navigate(['/'])
  }

  onActiveItemChange(event: any) {
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = this.items[this.items.length - 1];
  }
}

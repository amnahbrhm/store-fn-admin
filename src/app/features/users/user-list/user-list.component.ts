import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ConfirmationService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ConfirmationService]
})
export class UserListComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService, private service: UsersService) { }
  list: any[] = []
  items: MenuItem[] | undefined;
  selectedUser: any
  hasNextPage: boolean = false
  ngOnInit() {
    this.loadUsers()
    this.items = [
      {
        label: 'change role',
        icon: 'pi pi-refresh',
        command: () => {
          this.confirm('role-change')
          // this.showDialog(false, true)
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.confirm('delete');
        }
      }
    ];
  }
  loadUsers() {
    this.service.getUsers({ pagination: 1, page: 1 }).subscribe((data: any) => {
      this.list = (data['users'] as []);
      this.hasNextPage = data['hasNextPage'];
    });
  }
  confirm(type: 'delete' | 'role-change') {
    type === 'delete' && this.deleteUser()
    type === 'role-change' && this.changeRole()

  }
  deleteUser() {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete ${this.selectedUser.user_name} ?`,
      header: `Delete User`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // id
        this.service.delete({ id: this.selectedUser._id }).subscribe((data: any) => {
          this.loadUsers()
        });
      },
      reject: () => {
      }
    });
  }
  changeRole() {
    this.confirmationService.confirm({
      message: `Are you sure that you want to change role for ${this.selectedUser.user_name} ?`,
      header: `Change Role`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // id, role
        const role = this.selectedUser.role === 'admin' ? 'user' : 'admin'
        this.service.changeRole({ id: this.selectedUser._id, role }).subscribe((data: any) => {
          this.loadUsers()
        });
      },
      reject: () => {
      }
    });
  }
}

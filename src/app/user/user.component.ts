import { Component, OnInit, OnDestroy, ViewChild, Output } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  public users: User[];
  private subscription: Subscription;
  @Output() userId: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.allUsers();
  }

  allUsers() {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => this.users = users['data']
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

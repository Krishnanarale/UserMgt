import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges, OnDestroy {

  public user: User;
  private subscription: Subscription;
  @Input() userId: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.userId)
      this.User(this.userId);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(this.userId)
      this.User(this.userId);
  }

  User(userId) {
    this.subscription = this.userService.getUser(userId).subscribe(
      (user: User[]) => this.user = user['data']
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

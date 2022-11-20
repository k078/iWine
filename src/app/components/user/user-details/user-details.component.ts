import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/components/user/User';
import { UserService } from 'src/app/components/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  UserService: UserService = new UserService();
  User = this.UserService.getUsers();
  selectedUser: User | undefined;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const UserIdFromRoute = Number(routeParams.get('UserId'));
    this.selectedUser = this.User.find(User => User.id === UserIdFromRoute);
  }

  constructor(private route: ActivatedRoute) {
   }
}

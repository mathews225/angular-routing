import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


users: User[] = [];
 
  constructor(
    private usersvc: UserService
    //private FormsModule: 
  ) { }

  ngOnInit(): void {
    this.usersvc.list()
      .subscribe(
        res => {
          console.log("Users:", res);
          this.users = res as User[];
        },
        err => {
          console.error(err)
        }
      )
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.usersvc.get(+this.id).subscribe(
      res => {
        console.log("User:", res);
        this.user = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
 
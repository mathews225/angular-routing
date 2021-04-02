import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = null;
  id: number = 0;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  update(): void {
    console.log("Before Change", this.user);
    this.usersvc.update(this.user).subscribe(
      res => {
        console.warn(`Successfully edited ${this.user.username}`); 
        this.router.navigateByUrl('/user/list');
      },
      err => {
        console.error(err);
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

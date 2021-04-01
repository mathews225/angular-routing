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

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit(): void {
    console.log("Before Change", this.user);
    this.usersvc.update(this.user).subscribe(
      res => { 
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error(err);
      }
    )  
  }

}

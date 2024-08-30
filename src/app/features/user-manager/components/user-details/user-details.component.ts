import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  // VARIABLES
  applicationUserId: string = '';
  user?: User;

  constructor(private userService: UserService, private router: ActivatedRoute) {
    this.applicationUserId = this.router.snapshot.paramMap.get("id") || '';

    this.userService.getId(this.applicationUserId).subscribe({
      next: v => {
        this.user = v.applicationUserById;
      },
      error: e => {
        console.log('error: ', e)
      }        
    });    
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
}

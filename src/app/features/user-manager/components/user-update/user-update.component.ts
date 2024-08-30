import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  // VARIABLES
  applicationUserId: string = '';
  user!: User;

  // es justo y necesario
  submitButtonOptions = {
    text: 'Update',
    type: 'default',
    useSubmitBehavior: true
  };

  constructor(private userService: UserService, private router: ActivatedRoute, private ruti: Router ) {
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

  // METODOS

  handleSubmit(event: Event) {
    event.preventDefault(); // es justo y necesario

    this.userService.update(this.user).subscribe({
      next: (v) => {
        console.log('next: ', v)
        this.ruti.navigate(['/user']); // regresamos!
      },
      error: (e) => console.log('error: ', e)
    });
  }

}

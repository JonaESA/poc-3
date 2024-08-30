import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  constructor(private userService: UserService, private router: Router) {

  }

  // VARIABLES

  user: User = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    isEmailVerified: false,
    isBlocked: false,
    isEnabled: false
  };

  submitButtonOptions = {
    text: 'Create',
    type: 'default',
    useSubmitBehavior: true
  };

  // METODOS

  // gsmd :)
  handleSubmit(event: Event) {
    event.preventDefault(); // evita (peron) el comportamiento por defecto del formulario. Es justo y necesario!

    this.userService.create(this.user).subscribe({
      next: (v) => {
        console.log('next: ', v),
        this.router.navigate(['/user']); // regresamos!
      },
      error: (e) => console.log('error: ', e)
    });
  }

  isFormValid(): boolean {
    console.log('hola amigo!')
    return this.user.userName.trim() !== '' && this.user.email.trim() !== '';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  emailInput: string = '';
  passwordInput: string = '';

  onSubmit() {
    console.log(this.emailInput)
    console.log(this.passwordInput)
  }
}

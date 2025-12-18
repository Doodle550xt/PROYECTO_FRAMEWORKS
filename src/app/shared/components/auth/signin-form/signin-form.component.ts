import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LabelComponent } from '../../form/label/label.component';
import { CheckboxComponent } from '../../form/input/checkbox.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-signin-form',
  imports: [
    CommonModule,
    LabelComponent,
    CheckboxComponent,
    ButtonComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './signin-form.component.html',
  styles: ``
})
export class SigninFormComponent {

  showPassword = false;
  isChecked = false;

  username = '';
  password = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  constructor(private authService: AuthService, private router: Router) {
  }

  onSignIn() {
    console.log('Email:', this.username);
    console.log('Password:', this.password);
    this.authService.login(this.username, this.password).subscribe({
      next: (data) => {
        const token = data.token;
        this.authService.saveToken(token, this.username)
        this.router.navigate(["/entrenadores"])
      },
      error: (e) => {
        alert("Credenciales incorrectas")
      }
    })
  }
}

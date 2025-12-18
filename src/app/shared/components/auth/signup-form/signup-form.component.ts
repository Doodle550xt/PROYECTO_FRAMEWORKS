import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LabelComponent } from '../../form/label/label.component';
import { CheckboxComponent } from '../../form/input/checkbox.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';


@Component({
  selector: 'app-signup-form',
  imports: [
    CommonModule,
    LabelComponent,
    CheckboxComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './signup-form.component.html',
  styles: ``
})
export class SignupFormComponent {

  showPassword = false;

  fname = '';
  username = '';
  password = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  constructor(private authService: AuthService, private router: Router) {

  }

  onSignIn() {
    this.authService.reigstrarUsuario({
      username: this.username,
      fullname: this.fname,
      password: this.password
    }).subscribe({
      next: (data) => {
        alert("Cuenta creada")
        this.router.navigate(["/signin"])
      },
      error: (e) => {
        alert("Error al registrar")
      }
    })
  }
}

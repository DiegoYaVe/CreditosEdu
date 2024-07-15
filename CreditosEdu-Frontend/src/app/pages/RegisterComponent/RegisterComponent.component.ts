import { Component, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/auth/register.service';
import { RegisterRequest } from '../../services/auth/registerRequest';
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí

@Component({
  selector: 'app-RegisterComponent',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './RegisterComponent.component.html',
  styleUrls: ['./RegisterComponent.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  registrationError: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService){
    this.registerForm = this.formBuilder.group({
      //username: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      /* firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      country: ['', Validators.required] */
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userDetails: RegisterRequest = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
        /* ,firstname: this.registerForm.value.firstname,
        lastname: this.registerForm.value.lastname,
        country: this.registerForm.value.country */
      };

      this.registerService.register(userDetails).subscribe(
        () => {
          this.router.navigateByUrl('/login');
        },
        error => {
          console.error('Error al registrar usuario:', error);
          this.registrationError = 'Error al registrar usuario. Por favor, inténtalo de nuevo.';
        }
      );
    } else {
      this.registrationError = 'Por favor, completa todos los campos correctamente.';
    }
  }
}

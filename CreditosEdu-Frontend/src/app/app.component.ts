import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from './services/auth/login.service'; // Asegúrate de importar correctamente tu servicio de inicio de sesión

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUrl: string = '';
  title = 'frontend-angular';
  showNavbar: boolean = true;
  userLoginOn: boolean = false; // Declarar explícitamente como boolean

  constructor(private router: Router, private loginService: LoginService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.showNavbar = !this.currentUrl.includes('/login') && !this.currentUrl.includes('/registro');

        // Verificar si el usuario está autenticado usando el servicio de login
        this.loginService.userLoginOn.subscribe(isAuthenticated => {
          if (!isAuthenticated && this.shouldRedirectToLoginOrRegister()) {
            this.router.navigate(['/login']);
          } else if (isAuthenticated && (this.currentUrl.includes('/login') || this.currentUrl.includes('/register'))) {
            this.router.navigate(['/credit-requests']);
          }
        });
      }
    });
  }

  ngOnInit(): void {
    // Obtener el estado inicial de autenticación al cargar el componente
    this.loginService.userLoginOn.subscribe(userLoginOn => {
      this.userLoginOn = userLoginOn;

      if (userLoginOn && (this.currentUrl.includes('/login') || this.currentUrl.includes('/register'))) {
        this.router.navigate(['/credit-requests']);
      }
    });
  }

  private shouldRedirectToLoginOrRegister(): boolean {
    return !this.currentUrl.includes('/login') && !this.currentUrl.includes('/register');
  }
}

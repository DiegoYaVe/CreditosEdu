import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Objeto } from '../../models/objeto'; // Asegúrate de que esta ruta sea correcta
import { CreditRequestService } from '../../services/CreditRequestService.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-CreditRequestDetailComponent',
  templateUrl: './CreditRequestDetailComponent.component.html',
  styleUrls: ['./CreditRequestDetailComponent.component.css']
})
export class CreditRequestDetailComponent implements OnInit {
  id: number;
  objeto: Objeto = new Objeto();

  constructor(private objetoService: CreditRequestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cargarObjeto();
  }

  cargarObjeto(): void {
    this.objetoService.getObjeto(this.id).subscribe(
      {
        next: (datos: Objeto) => this.objeto = datos,
        error: (errores) => console.log(errores)
      }
    );
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    (this.objeto as any)[name] = value;
  }

  onSubmit(): void {
    console.log('Objeto a enviar:', this.objeto); // Verifica qué datos tiene this.objeto
    this.objetoService.updateObjeto(this.id, this.objeto).subscribe(
      {
        next: () => this.router.navigate(['/credit-requests']),
        error: (errores) => console.log('Error al actualizar objeto:', errores)
      }
    );
  }
  
}

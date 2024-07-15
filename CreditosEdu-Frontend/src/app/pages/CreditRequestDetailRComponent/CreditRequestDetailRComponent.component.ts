import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Objeto } from '../../models/objeto'; // Asegúrate de que esta ruta sea correcta
import { CreditRequestService } from '../../services/CreditRequestService.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-CreditRequestDetailRComponent', 
  templateUrl: './CreditRequestDetailRComponent.component.html',
  styleUrls: ['./CreditRequestDetailRComponent.component.css']
})
export class CreditRequestDetailRComponent implements OnInit {
  objeto: Objeto = new Objeto();

  constructor(private objetoService: CreditRequestService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
  // Recuperar el valor del localStorage
    let uid = '';

    // Verificar si se encontró un valor en localStorage
    const storedUid = localStorage.getItem('uid');
    if (storedUid) {
      uid = storedUid;
    }

    // Asignar uid al objeto
    this.objeto.userId = uid;
    this.objeto.status = 1;
    this.objetoService.addObjeto(this.objeto).subscribe(
      () => this.router.navigate(['/credit-requests']),
      error => console.error('Error al agregar objeto', error)
    );
  }
  
}

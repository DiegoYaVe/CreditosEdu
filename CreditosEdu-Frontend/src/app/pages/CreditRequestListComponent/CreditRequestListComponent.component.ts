import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Objeto } from '../../models/objeto'; // Asegúrate de que esta ruta sea correcta
import { CreditRequestService } from '../../services/CreditRequestService.service'; // Asegúrate de que esta ruta sea correcta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-CreditRequestListComponent',
  templateUrl: './CreditRequestListComponent.component.html',
  styleUrls: ['./CreditRequestListComponent.component.css']
})
export class CreditRequestListComponent implements OnInit {
  objetos: Objeto[] = [];
  filtros: any = {
    userId: '',
    purpose: '',
    amount: '',
    status: ''
  };

  constructor(private objetoService: CreditRequestService, private router: Router) { }

  ngOnInit(): void {
    this.cargarObjetos();
  }

  cargarObjetos(): void {
    this.objetoService.getObjetos().subscribe(
      data => this.objetos = data,
      error => console.error('Error al cargar objetos', error)
    );
  }

  buscarObjetos(): void {
    this.objetoService.findByFilters(this.filtros).subscribe(
      data => this.objetos = data,
      error => console.error('Error al buscar objetos', error)
    );
  }

  editarObjeto(id: number): void {
    this.router.navigate(['credit-requests', id]);
  }

  /* eliminarObjeto(id: number): void {
    this.objetoService.deleteObjeto(id).subscribe(
      () => this.cargarObjetos(),
      error => console.error('Error al eliminar objeto', error)
    );
  } */

  eliminarObjeto(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.objetoService.deleteObjeto(id).subscribe(
          () => {
            this.cargarObjetos();
            Swal.fire(
              'Eliminado',
              'El objeto ha sido eliminado.',
              'success'
            );
          },
          error => {
            console.error('Error al eliminar objeto', error);
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar el objeto.',
              'error'
            );
          }
        );
      }
    });
  }
}

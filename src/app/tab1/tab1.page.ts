import { Component } from '@angular/core';

interface Horario {
  hora: string;
  disponible: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  fechaSeleccionada: string = new Date().toISOString();

  horarios: Horario[] = [
    { hora: '08:00', disponible: true },
    { hora: '09:00', disponible: false },
    { hora: '10:00', disponible: true },
    { hora: '11:00', disponible: true },
    { hora: '12:00', disponible: false },
  ];

  reservarHorario(horario: Horario) {
    if (horario.disponible) {
      horario.disponible = false;
    }
  }

  get turnosDisponibles(): number {
    return this.horarios.filter(h => h.disponible).length;
  }

  onFechaCambiada(event: any) {
    this.fechaSeleccionada = event.detail.value;
  }
}
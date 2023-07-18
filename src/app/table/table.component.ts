import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


export interface ListaNombresYCostos {
  id: number;
  name: string;
  price: number;
}

const LISTA_TAREA: ListaNombresYCostos[] = [
  { id: 1, name: '1984', price: 1 },
  { id: 2, name: 'Futuro Pop', price: 2 },
  { id: 3, name: 'Harry Potter y el misterio del príncipe', price: 3 },
  { id: 4, name: 'El Hobbit', price: 4 },
  { id: 5, name: 'Matar a un ruiseñor', price: 5 },
  { id: 6, name: 'Orgullo y prejuicio', price: 6 },
  { id: 7, name: 'El señor de los anillos', price: 7 },
  { id: 8, name: 'El cuento de la criada', price: 8 },
  { id: 9, name: 'Las doradas manzanas del sol', price: 9 },
  { id: 10, name: 'Una breve historia del tiempo', price: 10 },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatDividerModule, MatButtonModule, MatIconModule]
})
export class TableBasicExample {
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = LISTA_TAREA;

  showTable = false;

  toggleTable() {
    this.showTable = !this.showTable;
  }
}

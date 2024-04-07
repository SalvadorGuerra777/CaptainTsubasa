

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-increment-button',
  templateUrl: './increment-button.component.html',
  styleUrls: ['./increment-button.component.css']
})
export class IncrementButtonComponent {
  contador: number = 0;

  incrementarContador() {
    this.contador++;
  }
}

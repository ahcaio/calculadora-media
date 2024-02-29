import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-calculadora-media',
templateUrl: './calculadora-media.component.html',
styleUrls: ['./calculadora-media.component.css'],
standalone: true,
imports: [FormsModule, CommonModule]
})
export class CalculadoraMediaComponent {
  nota1: number = 0.0;
  nota2: number = 0.0;
  media: number | null = null

  calcularMedia (): void {
    this.media = (this.nota1 + this.nota2) / 2 ;
  }
}

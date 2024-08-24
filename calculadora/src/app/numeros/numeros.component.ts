import { Component } from '@angular/core';
import { OperacionComponent } from '../operacion/operacion.component';

@Component({
  selector: 'app-numeros',
  standalone: true,
  imports: [OperacionComponent],
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.css'
})
export class NumerosComponent {
numero1: number = 0
numero2: number = 0
resultadaso :  number = 0;
numero1Change(event: any){
  this.numero1 = Number(event.target.value);  
    console.log(this.numero1);
}
numero2Change(event: any){
this.numero2 = Number(event.target.value);  // Convertir a número
console.log(this.numero2);
}
Resultado(a: number){
this.resultadaso = a;
}
limpiarNumeros() {
  this.numero1 = 0;
  this.numero2 = 0;
  this.resultadaso = 0;
}
}
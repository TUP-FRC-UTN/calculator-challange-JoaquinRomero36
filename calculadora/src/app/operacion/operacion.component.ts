import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-operacion',
  standalone: true,
  imports: [],
  templateUrl: './operacion.component.html',
  styleUrl: './operacion.component.css'
})
export class OperacionComponent {
@Input() numero1: number = 0;
@Input() numero2: number = 0;
resultado : number = 0;
@Output() resultadoa = new EventEmitter<number>();
@Output() limpiarNumeros = new EventEmitter<void>();


mas(){
  this.resultado = +this.numero1 + +this.numero2
  this.resultadoa.emit( this.resultado)
}
menos(){
  this.resultado = +this.numero1 - +this.numero2
  this.resultadoa.emit(this.resultado)
}
por(){
  this.resultado = +this.numero1 * +this.numero2
  this.resultadoa.emit(this.resultado)
}
dividir(){
  this.resultado = +this.numero1 / +this.numero2
  this.resultadoa.emit(this.resultado)
}
elevar(){
  this.resultado = Math.pow(+this.numero1, +this.numero2) 

  this.resultadoa.emit(this.resultado)
}
limpiar(){
  this.limpiarNumeros.emit();
}
}
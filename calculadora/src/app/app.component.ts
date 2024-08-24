import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumerosComponent } from './numeros/numeros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumerosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
}

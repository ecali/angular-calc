import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalculatorComponent} from './shared/calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    CalculatorComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
}

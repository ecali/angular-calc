import { Component } from '@angular/core';
import {CalculatorButtonComponent} from '../ui/calculator-button/calculator-button.component';

@Component({
  selector: 'app-calculator',
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  styles: ``
})
export class CalculatorComponent {

  title: string = 'Calculator';
}

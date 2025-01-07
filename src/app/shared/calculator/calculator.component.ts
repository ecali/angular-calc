import {Component, HostListener} from '@angular/core';
import {CalculatorButtonComponent} from '../ui/calculator-button/calculator-button.component';
import {CalculatorService} from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  styles: ``
})
export class CalculatorComponent {

  constructor(public calculatorService: CalculatorService) {}

  title: string = 'Calculator';
  operatorsButtons = ['*', '/', '+', '-'];


  get displayNumber(): string {
    return this.calculatorService.getDisplayNumber();
  }

  get history(): string[] {
    return this.calculatorService.getHistory();
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    event.preventDefault();
    if(!isNaN(Number(key)) || this.operatorsButtons.includes(key) || key === '.'){
      this.pressKey(key);
    }else if (key === 'Enter' || key === 'Backspace') {
      this.pressKey(key === 'Enter' ? '=' : 'c');
    }
  }

  pressKey = (keyVal: string) => {
    if(keyVal === 'AC'){
      this.calculatorService.clear()
    } else if (this.operatorsButtons.includes(keyVal)) {
      this.calculatorService.handleOperatorKey(keyVal);
    } else if (keyVal === '=') {
      this.calculatorService.calculate();
    }else if(keyVal === 'c') {
      this.calculatorService.handleCanc();
    } else {
      this.calculatorService.handleNumber(keyVal);
    }
  }

}

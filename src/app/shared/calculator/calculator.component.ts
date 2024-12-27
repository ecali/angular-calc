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
  displayNumber: string = '0';
  firstOperand: number | null = null;
  secondOperand: number | null = null;
  operator: string | null = null;
  operatorsButtons = ['*', '/', '+', '-', '='];
  history: string[] = [];
  calculated: boolean = false;

  clear = (): void => {
    this.firstOperand = null;
    this.secondOperand = null;
    this.operator = null;
    this.displayNumber = '0';
    this.history = [];
    this.calculated = false;
  }

  pressKey = (keyVal: string) => {
    const lastHistoryItem = this.history.at(-1);

    if(this.operatorsButtons.includes(keyVal)) {
      this.handleOperationKey(keyVal, lastHistoryItem);
    }else if((lastHistoryItem !== '=' || keyVal !== '.') && keyVal !== 'c') {
      this.handleNumber(keyVal);
    }else if(keyVal === 'c' && !this.calculated){
      this.handleCanc();
    }
  }

  handleCanc = () => {
    if(this.operator === null){
      this.displayNumber = this.displayNumber === '0' || this.displayNumber.length === 1 ? '0' : this.displayNumber.slice(0, -1);
      this.firstOperand = Number(this.displayNumber);
    }else{
      this.displayNumber = this.displayNumber === '0' || this.displayNumber.length === 1 ? '0' : this.displayNumber.slice(0, -1);
      this.secondOperand = Number(this.displayNumber);
    }
  }

  handleNumber = (val: string): void => {
    if(this.operator === null){
      this.displayNumber = this.displayNumber === '0' ? val : this.displayNumber + val;
      this.firstOperand = Number(this.displayNumber);
    }else{
      console.log(this.displayNumber);
      this.displayNumber = this.secondOperand === null || this.secondOperand === 0 ? val : this.displayNumber + val;
      this.secondOperand = Number(this.displayNumber);
    }
  }

  handleOperationKey = (keyVal: string, lastHistoryItem: string | undefined): void => {
    if(keyVal === '='){
      this.handleEqualsKey(lastHistoryItem);
    }else{
      this.handleOperatorKey(keyVal, lastHistoryItem)
    }
  }

  handleOperatorKey = (keyVal: string, lastHistoryItem: string | undefined): void => {
    if(!this.operatorsButtons.includes(lastHistoryItem!) || lastHistoryItem === '=') {
      this.calculated = false;
      this.operator = keyVal;
      this.firstOperand = Number(this.displayNumber);
      this.history.push(this.displayNumber, this.operator)
    }
  }

  handleEqualsKey = (lastHistoryItem: string | undefined): void => {
    if (lastHistoryItem !== '=' && this.firstOperand !== null && this.secondOperand !== null && !this.calculated) {
      this.history.push(String(this.secondOperand), '=');
      this.calculate()
    }
  }

  calculate = (): void => {
    if(this.firstOperand !== null && this.secondOperand !== null){
      this.calculated = true;
      const operations: Record<string, (a: number, b: number) => number> = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
      };
      const operation = operations[this.operator!];
      if(operation){
        this.displayNumber = operation(this.firstOperand, this.secondOperand).toString();
        this.handleCalculateChain(this.displayNumber)
      }
    }
  }

  handleCalculateChain = (val: string): void => {
    this.firstOperand = Number(val);
    this.secondOperand = null;
    this.operator = null;
  }

}

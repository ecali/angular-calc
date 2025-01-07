import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private firstOperand: number | null = null;
  private secondOperand: number | null = null;
  private operator: string | null = null;
  private displayNumber: string = '0';
  private history: string[] = [];
  private calculated: boolean = false;

  getDisplayNumber(): string {
    return this.displayNumber;
  }

  getHistory(): string[] {
    return this.history;
  }

  clear = (): void => {
    this.firstOperand = null;
    this.secondOperand = null;
    this.operator = null;
    this.displayNumber = '0';
    this.history = [];
    this.calculated = false;
  }


  handleCanc = () => {
    if(!this.calculated){
      if(this.operator === null){
        this.displayNumber = this.displayNumber === '0' || this.displayNumber.length === 1 ? '0' : this.displayNumber.slice(0, -1);
        this.firstOperand = Number(this.displayNumber);
      }else{
        this.displayNumber = this.displayNumber === '0' || this.displayNumber.length === 1 ? '0' : this.displayNumber.slice(0, -1);
        this.secondOperand = Number(this.displayNumber);
      }
    }

  }

  handleNumber = (val: string): void => {
    if(!this.calculated){
      if (this.operator === null) {
        if (this.displayNumber.length < 15) {
          this.displayNumber = this.displayNumber === '0' ? val : this.displayNumber + val;
          this.firstOperand = Number(this.displayNumber);
        }
      } else {
        if (this.secondOperand === null || this.secondOperand === 0) {
          this.displayNumber = val;
          this.secondOperand = Number(this.displayNumber);
        } else if (this.displayNumber.length < 15) {
          this.displayNumber += val;
          this.secondOperand = Number(this.displayNumber);
        }
      }
    }

  };

  handleOperatorKey = (keyVal: string): void => {
    if(!this.operator || this.calculated) {
      this.calculated = false;
      this.operator = keyVal;
      this.firstOperand = Number(this.displayNumber);
      this.history.push(this.displayNumber, this.operator)
    }
  }

  calculate = (): void => {
    if(this.firstOperand !== null && this.secondOperand !== null){
      this.history.push(this.secondOperand.toString(), '=');
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

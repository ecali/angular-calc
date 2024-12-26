import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  template: `
    <button class="w-full px-4 py2 rounded bg-gray-700 text-gray-100">{{label}}</button>
  `,
  styles: ``
})
export class CalculatorButtonComponent {
  @Input({required: true}) label: string = '';
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  template: `
    <button [class]="getStyle()">{{label}}</button>
  `,
  styles: ``
})
export class CalculatorButtonComponent {
  @Input({required: true}) label: string = '';
  @Input({required: false}) variant: 'gray' | 'yellow' = 'gray';

  getStyle = () => {
    return 'w-full px-6 py-4 rounded bg-gray-700 text-gray-100'.concat(' ', this.variant === 'gray' ? 'bg-gray-700' : 'bg-yellow-600')
  }

}

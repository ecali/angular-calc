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
    return 'hover:scale-105 shadow-inner w-full drop-shadow-[0_10px_10px_rgba(255,255,255,0.15)] px-4 py-4 rounded-xl bg-gray-700 text-gray-100'.concat(' ', this.variant === 'gray' ? 'bg-gray-700' : 'bg-yellow-600')
  }

}

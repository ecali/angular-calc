import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear all values', () => {
    component.clear();
    expect(component.displayNumber).toBe('0');
    expect(component.firstOperand).toBeNull();
    expect(component.secondOperand).toBeNull();
    expect(component.operator).toBeNull();
    expect(component.history).toEqual([]);
    expect(component.calculated).toBeFalse();
  });

  it('should handle number key press', () => {
    component.pressKey('5');
    expect(component.displayNumber).toBe('5');
    expect(component.firstOperand).toBe(5);
  });

  it('should handle operator key press', () => {
    component.pressKey('5');
    component.pressKey('+');
    expect(component.operator).toBe('+');
    expect(component.firstOperand).toBe(5);
    expect(component.history).toEqual(['5', '+']);
  });

  it('should handle equals key press and calculate result', () => {
    component.pressKey('5');
    component.pressKey('+');
    component.pressKey('3');
    component.pressKey('=');
    expect(component.displayNumber).toBe('8');
    expect(component.history).toEqual(['5', '+', '3', '=']);
  });

  it('should handle multiple operations', () => {
    component.pressKey('5');
    component.pressKey('+');
    component.pressKey('3');
    component.pressKey('=');
    component.pressKey('*');
    component.pressKey('2');
    component.pressKey('=');
    expect(component.displayNumber).toBe('16');
    expect(component.history).toEqual(['5', '+', '3', '=', '8', '*', '2', '=']);
  });

  it('should handle division by zero', () => {
    component.pressKey('5');
    component.pressKey('/');
    component.pressKey('0');
    component.pressKey('=');
    expect(component.displayNumber).toBe('Infinity');
  });

  it('should handle decimal numbers', () => {
    component.pressKey('5');
    component.pressKey('.');
    component.pressKey('5');
    component.pressKey('+');
    component.pressKey('2');
    component.pressKey('.');
    component.pressKey('5');
    component.pressKey('=');
    expect(component.displayNumber).toBe('8');
  });


});

import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct display number', () => {
    expect(service.getDisplayNumber()).toBe('0');
  });

  it('should return the correct history', () => {
    service.clear();
    expect(service.getHistory()).toEqual([]);
  });

  it('should clear the calculator state when clear() is called', () => {
    service.handleNumber('5');
    service.handleOperatorKey('+');
    service.handleNumber('3');
    service.calculate();
    service.clear();

    expect(service.getDisplayNumber()).toBe('0');
    expect(service.getHistory()).toEqual([]);
  });

  it('should handle number input correctly with handleNumber()', () => {
    service.handleNumber('5');
    expect(service.getDisplayNumber()).toBe('5');

    service.handleNumber('1');
    expect(service.getDisplayNumber()).toBe('51');
  });

  it('should handle operator input correctly with handleOperatorKey()', () => {
    service.handleNumber('5');
    service.handleOperatorKey('+');
    expect(service.getDisplayNumber()).toBe('5');
    expect(service.getHistory()).toEqual(['5', '+']);

    service.handleNumber('3');
    service.calculate();
    expect(service.getDisplayNumber()).toBe('8');
  });

  it('should calculate the result correctly with calculate()', () => {
    service.handleNumber('5');
    service.handleOperatorKey('+');
    service.handleNumber('3');
    service.calculate();

    expect(service.getDisplayNumber()).toBe('8');
    expect(service.getHistory()).toEqual(['5', '+', '3', '=']);
  });


});

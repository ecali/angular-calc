import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../../services/calculator.service';
import { CalculatorButtonComponent } from '../ui/calculator-button/calculator-button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: CalculatorService;

  beforeEach(() => {
    const calculatorServiceMock = {
      getDisplayNumber: jasmine.createSpy().and.returnValue('0'),
      getHistory: jasmine.createSpy().and.returnValue([]),
      clear: jasmine.createSpy(),
      handleOperatorKey: jasmine.createSpy(),
      calculate: jasmine.createSpy(),
      handleCanc: jasmine.createSpy(),
      handleNumber: jasmine.createSpy()
    };

    TestBed.configureTestingModule({
      imports: [CalculatorComponent, CalculatorButtonComponent],
      providers: [
        { provide: CalculatorService, useValue: calculatorServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    calculatorService = TestBed.inject(CalculatorService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should call handleNumber when a number key is pressed', () => {
    const key = '5';
    component.pressKey(key);
    expect(calculatorService.handleNumber).toHaveBeenCalledWith(key);
  });

  it('should call handleOperatorKey when an operator key is pressed', () => {
    const key = '+';
    component.pressKey(key);
    expect(calculatorService.handleOperatorKey).toHaveBeenCalledWith(key);
  });

  it('should call calculate when "=" key is pressed', () => {
    const key = '=';
    component.pressKey(key);
    expect(calculatorService.calculate).toHaveBeenCalled();
  });

  it('should call handleCanc when "c" key is pressed', () => {
    const key = 'c';
    component.pressKey(key);
    expect(calculatorService.handleCanc).toHaveBeenCalled();
  });

  it('should call clear when "AC" key is pressed', () => {
    const key = 'AC';
    component.pressKey(key);
    expect(calculatorService.clear).toHaveBeenCalled();
  });

  it('should call handleKeyboardEvent when a key is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: '1' });
    spyOn(component, 'pressKey');
    component.handleKeyboardEvent(event);
    expect(component.pressKey).toHaveBeenCalledWith('1');
  });

  it('should handle keyboard events correctly for operators', () => {
    const event = new KeyboardEvent('keydown', { key: '+' });
    spyOn(component, 'pressKey');
    component.handleKeyboardEvent(event);
    expect(component.pressKey).toHaveBeenCalledWith('+');
  });

  it('should prevent default action on keydown event', () => {
    const event = new KeyboardEvent('keydown', { key: '1' });
    spyOn(event, 'preventDefault');
    component.handleKeyboardEvent(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should call pressKey with correct argument for Enter and Backspace keys', () => {
    const eventEnter = new KeyboardEvent('keydown', { key: 'Enter' });
    spyOn(component, 'pressKey');
    component.handleKeyboardEvent(eventEnter);
    expect(component.pressKey).toHaveBeenCalledWith('=');

    const eventBackspace = new KeyboardEvent('keydown', { key: 'Backspace' });
    component.handleKeyboardEvent(eventBackspace);
    expect(component.pressKey).toHaveBeenCalledWith('c');
  });
});

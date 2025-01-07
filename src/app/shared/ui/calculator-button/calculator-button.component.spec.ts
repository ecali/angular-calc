import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorButtonComponent } from './calculator-button.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CalculatorButtonComponent', () => {
  let component: CalculatorButtonComponent;
  let fixture: ComponentFixture<CalculatorButtonComponent>;
  let buttonElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalculatorButtonComponent],
    });
    fixture = TestBed.createComponent(CalculatorButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(By.css('button'));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label', () => {
    component.label = '1';
    fixture.detectChanges();
    expect(buttonElement.nativeElement.textContent).toBe('1');
  });

  it('should apply the correct style for gray variant', () => {
    component.variant = 'gray';
    fixture.detectChanges();
    expect(buttonElement.nativeElement.classList).toContain('bg-gray-700');
    expect(buttonElement.nativeElement.classList).not.toContain('bg-yellow-600');
  });

  it('should apply the correct style for yellow variant', () => {
    component.variant = 'yellow';
    fixture.detectChanges();
    expect(buttonElement.nativeElement.classList).toContain('bg-yellow-600');
    expect(buttonElement.nativeElement.classList).not.toContain('bg-gray-700');
  });

});

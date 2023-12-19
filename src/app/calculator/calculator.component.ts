import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '';

  appendToDisplay(value: string) {
    if (this.display === '0') {
      this.display = value;
    } else {
      this.display += value;
    }
  }
  

  clearDisplay() {
    this.display = '0';
  }

  calculate() {
    try {
      if (this.display.includes('/0')) {
        this.display = 'Error (Division by Zero)';
      } else {
        this.display = eval(this.display);
      }
    } catch (e) {
      this.display = 'Error';
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Escape', 'Backspace'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

}

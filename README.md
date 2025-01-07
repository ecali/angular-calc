# Calculator

A simple and interactive calculator built using Angular. This app showcases the core functionality of a basic calculator, including addition, subtraction, multiplication, division, and chained calculations. The application is modular and easy to extend for future enhancements.

## Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Supports chained calculations
- Clear functionality to reset inputs
- Handles edge cases like division by zero
- Clean and reusable components

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Angular CLI](https://angular.io/cli) (v12 or higher)

## Getting Started

Follow these steps to run the application locally:

1. **Clone the Repository:**

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   ```bash
   ng serve
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:4200
   ```

## Project Structure

```
├── src
│   ├── app
│   │   ├── services
│   │   │   ├── calculator.service.ts
│   │   │   ├── calculator.service.spec.ts
│   │   ├── calculator
│   │   │   ├── calculator.component.ts
│   │   │   ├── calculator.component.html
│   │   │   ├── calculator.component.css
│   │   │   └── calculator.component.spec.ts
│   │   ├── ui
│   │   │   └── calculator-button
│   │   │       ├── calculator-button.component.ts
│   │   │       ├── calculator-button.component.html
│   │   │       ├── calculator-button.component.css
│   │   │       └── calculator-button.component.spec.ts
│   ├── assets
│   └── environments
├── angular.json
├── package.json
└── README.md
```

## Usage

### Calculator Functionality

- **Numbers:** Click any number button to input numbers.
- **Operators:** Use `+`, `-`, `*`, `/` for operations.
- **Point:** Use `.` to use decimal number.
- **Equals (`=`):** Calculate the result of the current operation.
- **Cancel (`C`):** Cancel last digit.
- **Clear (`AC`):** Reset the calculator to its initial state.

****_You can use your physical keyboard to input values_****

### Example

1. Input: `8 + 2 =`
  - Output: `10`
2. Chaining: `10 * 3 =`
  - Output: `30`
3. Division by Zero: `5 / 0 =`
  - Output: `Infinity`

## Running Tests

To execute the unit tests for the application:

```bash
ng test
```

This will run the tests defined in `calculator.component.spec.ts` and other spec files, providing detailed results.

## Acknowledgments

- Built using [Angular](https://angular.io/)
- Inspired by the simplicity of traditional calculators


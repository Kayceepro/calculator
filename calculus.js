(function () {
        const number1 = parseFloat(prompt("Enter first number: "));

const operator = prompt("Enter operator ( either +, -, * or / ): ");

        const number2 = parseFloat(prompt("Enter second number: "));

        // check if numbers are numbers
        if (isNaN(number1) || isNaN(number2)) {
          alert("Please enter numbers");
          return;
        }
        let result;

        if (operator == "+") {
          result = number1 + number2;
        } else if (operator == "-") {
          result = number1 - number2;
        } else if (operator == "*") {
          result = number1 * number2;
        } else if (operator == "/") {
          if (number2 == 0) {
            return alert("Cannot divide by zero");
          }
          result = number1 / number2;
        } else {
          return alert("Invalid operator");
        }

        alert(`${number1} ${operator} ${number2} = ${result}`);
      })();
//Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
const operator = prompt('Enter operator ( either +, -, * or / ): ');


const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number : '));

function calculate(num1,num2,operator){
    let result;
    switch(operator){
        case '+':
            result = num1 + num2;
            console.log(result);
            break;
            case '-':
            result = num1 - num2;
            console.log(result);
            break;
            case '*':
            result = num1 * num2;
            console.log(result);
            break;
            case '/':
            result = num1 / num2;
            console.log(result);
            break;

            default:
                result= "invalid result";
                console.log(result);
    }
};
calculate(num1,num2,operator);
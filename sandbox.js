function decipherClicks(className, id) {
    if (className === 'num-btn' && count === 0) {
        num1 = document.querySelector(`#${id}`).textContent;
        console.log(num1);
        count += 1;
    } if (className === 'op' && count === 1) {
        operation = document.querySelector(`#${id}`).textContent;
        console.log(operation);
        count += 1;
    } if (className === 'num-btn' && count === 2) {
        num2 = document.querySelector(`#${id}`).textContent;
        console.log(num2);
        count += 1;
    } if (id === 'equal' && count === 3) {
        output = operate(operation, num1, num2);
        console.log(output);
        num1= output;
        count = 1;
    }
}